import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { css } from "emotion";
import { useTheme } from "@icgc-argo/uikit/ThemeProvider";
import { styled } from "@icgc-argo/uikit";
import Typography from "@icgc-argo/uikit/Typography";
import Tag from "@icgc-argo/uikit/Tag";
import Button from "@icgc-argo/uikit/Button";
import data, { FileDef, FieldDef } from "./data";
import elasticLunr, { Index } from "elasticlunr";
import Table from "@icgc-argo/uikit/Table";

const SearchStringContext = React.createContext("");

const NodeLabel = ({
  fileName,
  required = false,
  fields
}: {
  fileName: string;
  required: boolean;
  fields: Array<FieldDef>;
}) => {
  const theme = useTheme();
  const searchString = React.useContext(SearchStringContext);
  const [expanded, setExpanded] = React.useState(false);

  const requiredFields = React.useMemo(
    () =>
      fields
        .filter(field => field.required)
        .map(f => ({
          ...f,
          isMatch: f.name.includes(searchString)
        })),
    // .filter(field => field.name.includes(searchString)),
    [searchString]
  );
  const optionalFields = React.useMemo(
    () =>
      fields
        .filter(field => !field.required)
        .map(f => ({
          ...f,
          isMatch: f.name.includes(searchString)
        })),
    [searchString]
  );

  const fieldHasMatch = (
    field: typeof requiredFields[0] & typeof optionalFields[0]
  ) => field.isMatch;

  const hasMatch = React.useMemo(() => {
    return (
      requiredFields.some(fieldHasMatch) || optionalFields.some(fieldHasMatch)
    );
  }, [searchString]);

  const firstUpdate = React.useRef(true);
  React.useEffect(() => {
    if (!firstUpdate.current) {
      if (hasMatch) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    }
    firstUpdate.current = false;
  }, [searchString]);

  const ListItem = styled("li")`
    list-style-position: inside;
    word-wrap: break-word;
  `;
  const List = styled("ul")`
    padding-left: 10px;
  `;

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        opacity: ${!hasMatch ? 0.25 : 1};
      `}
    >
      <div
        className={css`
          border-radius: 10px;
          border: solid 2px
            ${required ? theme.colors.error : theme.colors.secondary};
          background: ${theme.colors.white};
          width: 225px;
          padding: 2px;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Typography
            variant="data"
            className={css`
              margin-left: 5px;
            `}
          >
            {fileName}
          </Typography>
          <Tag
            className={css`
              background: ${theme.colors.primary_1};
            `}
          >
            {!!(searchString && searchString.length)
              ? `${requiredFields.filter(fieldHasMatch).length +
                  optionalFields.filter(fieldHasMatch).length} / ${
                  fields.length
                }`
              : requiredFields.length + optionalFields.length}{" "}
            fields
          </Tag>
        </div>
        <Button variant="text" size="sm" onClick={e => setExpanded(!expanded)}>
          {!expanded ? "expand" : "collapse"}
        </Button>
        {expanded && (
          <div
            className={css`
              text-align: left;
            `}
          >
            {!!requiredFields.length && (
              <Typography color="error" bold>
                Required ({requiredFields.length} fields)
              </Typography>
            )}
            <List>
              {requiredFields.map(f => (
                <ListItem key={f.name}>
                  <Typography
                    variant="data"
                    color={f.isMatch ? "black" : "grey_2"}
                  >
                    {f.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
            {!!optionalFields.length && (
              <Typography color="secondary_dark" bold>
                Optional ({optionalFields.length} fields)
              </Typography>
            )}
            <List>
              {optionalFields.map(f => (
                <ListItem key={f.name}>
                  <Typography
                    variant="data"
                    color={f.isMatch ? "black" : "grey_2"}
                  >
                    {f.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </div>
        )}
      </div>
    </div>
  );
};

const Node: React.ComponentType<React.ComponentProps<typeof NodeLabel>> = ({
  fileName,
  required,
  children,
  fields
}) => {
  return (
    <TreeNode
      className={css`
        &::before,
        &::after {
          top: -4px !important;
        }
      `}
      label={
        <NodeLabel fileName={fileName} required={required} fields={fields} />
      }
    >
      {children}
    </TreeNode>
  );
};

const FileNode = ({ fileDef }: { fileDef: FileDef }) => (
  <Node
    fileName={fileDef.name}
    fields={fileDef.fields}
    required={fileDef.required}
  >
    {fileDef.children.map(f => (
      <FileNode fileDef={f} key={f.name} />
    ))}
  </Node>
);

const ExampleTree = ({
  searchString,
  rootFile
}: {
  searchString: string;
  rootFile: FileDef;
}) => {
  const theme = useTheme();

  const [zoom, setZoom] = React.useState(1);
  const scrollContainerRef = React.createRef<HTMLDivElement>();
  const treeContainerRef = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const treeContainer = treeContainerRef.current;
    if (scrollContainer && treeContainer) {
      scrollContainer.scroll({
        left: scrollContainer.scrollWidth / 2 - treeContainer.clientWidth / 2
      });
    }
  }, []);

  return (
    <div>
      <input
        type="range"
        min="0.5"
        max="1.5"
        step="0.2"
        value={zoom}
        onChange={e => setZoom(Number(e.target.value))}
      />
      <div
        ref={scrollContainerRef}
        className={css`
          /* border: solid 2px red; */
          overflow: scroll;
          height: 800px;
        `}
      >
        <div
          ref={treeContainerRef}
          style={{
            transition: "all 0.25s",
            transform: `scale(${zoom})`
          }}
        >
          <Tree
            label={null}
            lineHeight="40px"
            lineWidth="4px"
            lineBorderRadius="25px"
            lineColor={theme.colors.grey_1}
            nodePadding="2px"
          >
            <SearchStringContext.Provider value={searchString}>
              <FileNode fileDef={rootFile} />
            </SearchStringContext.Provider>
          </Tree>
        </div>
      </div>
    </div>
  );
};

export default ExampleTree;
