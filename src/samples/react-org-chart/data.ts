export type FieldDef = {
  name: string;
  required: boolean;
};
export type FileDef = {
  name: string;
  fields: Array<FieldDef>;
  required: boolean;
  children: Array<FileDef>;
};

export default {
  name: "sample_registration",
  required: true,
  fields: [
    { name: "program_id", required: true },
    { name: "submitter_donor_id", required: true },
    { name: "gender", required: true },
    { name: "submitter_specimen_id", required: true },
    { name: "specimen_tissue_source", required: true },
    { name: "tumour_normal_designation", required: true },
    { name: "submitter_sample_id", required: true },
    { name: "sample_type", required: true }
  ],
  children: [
    {
      name: "specimen",
      required: true,
      fields: [
        { name: "specimen_submitter_id", required: true },
        { name: "specimen_tissue_source", required: true },
        { name: "normal_or_tumour_designation", required: true },
        { name: "tumour_staging_system", required: true },
        { name: "tumour_stage", required: true },
        { name: "specimen_acquisition_interval", required: true },
        { name: "tumour_histological_type", required: true },
        { name: "specimen_anatomic_collection", required: true },
        { name: "central_pathology_confirmed", required: true },
        { name: "tumour_grading_system", required: true },
        { name: "tumour_grade", required: true },
        { name: "percent_tumour_cells", required: true },
        { name: "percent_proliferating_cells", required: true },
        { name: "percent_inflammatory_tissue", required: true },
        { name: "percent_stromal_cells", required: true },
        { name: "percent_necrosis", required: true },
        { name: "pathological_T_category", required: false },
        { name: "pathological_N_category", required: false },
        { name: "pathological_M_category", required: false }
      ],
      children: [
        {
          name: "donor",
          required: true,
          fields: [
            { name: "donor_submitter_id", required: true },
            { name: "gender", required: true },
            { name: "vital_status", required: true },
            { name: "cause_of_death", required: false },
            { name: "survival_time", required: false },
            { name: "prior_malignancy", required: false },
            { name: "cancer_type_prior_malignancy", required: false },
            { name: "height", required: false },
            { name: "weight", required: false },
            { name: "bmi", required: false }
          ],
          children: [
            {
              name: "primary_diagnosis",
              fields: [
                { name: "age_at_diagnosis", requireds: true },
                { name: "cancer_type_code", requireds: true },
                { name: "number_lymph_nodes_positive", requireds: true },
                { name: "tumour_stage", requireds: true },
                { name: "tumour_staging_system", requireds: true },
                { name: "clinical_t_category", required: false },
                { name: "clinical_n_category", required: false },
                { name: "clinical_m_category", required: false },
                { name: "number_lymph_nodes_examined", required: false },
                { name: "presenting_symptoms", required: false },
                { name: "stage_suffix", required: false },
                { name: "menopause_status", required: false }
              ],
              children: [],
              required: true
            },
            {
              name: "treatment",
              fields: [
                { name: "treatment_id", required: true },
                { name: "treatment_type", required: true },
                { name: "is_primary_treatment", required: true },
                { name: "age_at_consent_for_treatment", required: false },
                { name: "line_of_treatment", required: false },
                { name: "treatment_start_interval", required: false },
                { name: "treatment_duration", required: false },
                { name: "therapeutic_intent", required: false },
                { name: "response_to_therapy", required: false },
                { name: "treatment_discontinued_reason", required: false },
                {
                  name: "treatment_discontinued_reason_other",
                  required: false
                },
                { name: "toxicity_type", required: false },
                { name: "hemotological_toxicity", required: false },
                { name: "non-hemotological_toxicity", required: false },
                { name: "adverse_events", required: false },
                { name: "notes", required: false }
              ],
              children: [
                {
                  name: "chemotherapy",
                  fields: [
                    { name: "treatment_id", required: true },
                    { name: "chemotherapy_drug_name", required: true },
                    { name: "chemotherapy_dosage_units", required: true },
                    { name: "cumulative_drug_dosage", required: true },
                    { name: "dose_reduction", required: false },
                    { name: "percent_dose_reduction", required: false },
                    { name: "dose_reduction_reason", required: false },
                    { name: "dose_omission", required: false },
                    { name: "dose_omission_reason", required: false },
                    { name: "dose_delay", required: false },
                    { name: "dose_delay_reason", required: false },
                    { name: "dose_delay_days", required: false }
                  ],
                  children: [],
                  required: false
                },
                {
                  name: "radiation",
                  fields: [
                    { name: "treatment_id", required: true },
                    { name: "radiation_therapy_modality", required: true },
                    { name: "application_form", required: true },
                    { name: "radiation_therapy_fractions", required: true },
                    { name: "radiation_therapy_dosage", required: true },
                    {
                      name: "anatomical_site_radiation_therapy_administered",
                      required: true
                    }
                  ],
                  children: [],
                  required: false
                },
                {
                  name: "hormone_therapy",
                  fields: [
                    { name: "treatment_id", required: true },
                    { name: "hormone_therapy_drug_name", required: true },
                    { name: "hormone_drug_dosage_units", required: true },
                    { name: "cumulative_drug_dosage", required: true }
                  ],
                  children: [],
                  required: false
                },
                {
                  name: "surgery",
                  fields: [
                    { name: "specimen_id", required: false },
                    { name: "procedure_type", required: false },
                    { name: "intent", required: false },
                    { name: "type_of_biopsy", required: false },
                    { name: "procedure_interval", required: false },
                    { name: "procedure_location", required: false },
                    { name: "procedure_site", required: false },
                    { name: "resection_status", required: false },
                    { name: "greatest_dimension", required: false },
                    { name: "intraoperative_findings", required: false },
                    { name: "vascular_resection", required: false },
                    { name: "state_of_pv_smv", required: false },
                    { name: "state_of_sma", required: false },
                    { name: "extent_of_local_spread", required: false },
                    { name: "lymphovascular_invasion", required: false },
                    { name: "perineural_invasion", required: false },
                    {
                      name: "microscopic_pancreatic_resection_margin",
                      required: false
                    },
                    {
                      name: "microscopic_periuncinate_margin",
                      required: false
                    },
                    { name: "microscopic_pc_groove_margin", required: false },
                    {
                      name: "microscopic_retroperitoneal_margin",
                      required: false
                    },
                    { name: "microscopic_cbd_margin", required: false },
                    { name: "microscopic_duodenal_margin", required: false },
                    { name: "invasive_tumour_size", required: false },
                    { name: "number_of_tumours", required: false },
                    { name: "in_situ_grade", required: false },
                    { name: "total_tumour_size", required: false },
                    { name: "lymphvascular_invasion", required: false },
                    { name: "radial_margins", required: false },
                    { name: "total_malignant_nodes", required: false }
                  ],
                  children: [],
                  required: false
                }
              ],
              required: false
            },
            {
              name: "follow_up",
              fields: [
                { name: "interval_of_followup", required: true },
                { name: "disease_status_at_followup", required: true },

                { name: "relapse_type", required: false },
                { name: "relapse_interval", required: false },
                { name: "method_of_progression_status", required: false },
                {
                  name: "anatomic_site_progression_or_recurrence",
                  required: false
                },
                {
                  name: "tumour_staging_system_at_recurrence",
                  required: false
                },
                { name: "recurrence_t_category", required: false },
                { name: "recurrence_n_category", required: false },
                { name: "recurrence_m_category", required: false },
                { name: "tumour_stage_at_recurrence", required: false },
                { name: "tumour_staging_system_posttherapy", required: false },
                { name: "posttherapy_t_category", required: false },
                { name: "posttherapy_n_category", required: false },
                { name: "posttherapy_m_category", required: false },
                { name: "tumour_stage_at_posttherapy", required: false }
              ],
              children: [],
              required: false
            },
            {
              name: "exposure",
              fields: [
                { name: "donor_id", required: true },
                { name: "tobacco_smoking_history_indicator", required: false },
                { name: "tobacco_smoking_history_intensity", required: false },
                { name: "years_smoked", required: false },
                { name: "alternative_tobacco_use", required: false },
                { name: "alternative_tobacco_duration", required: false },
                { name: "second_hand_smoke_exposure", required: false },
                { name: "second_hand_smoke_duration", required: false },
                { name: "alcohol_history", required: false },
                { name: "alcohol_history_intensity", required: false }
              ],
              children: [],
              required: false
            },
            {
              name: "family",
              fields: [
                { name: "donor_id", required: true },
                { name: "relative_with_cancer_history", required: false },
                { name: "relationship_type", required: false },
                { name: "relationship_type_other", required: false },
                { name: "relationship_gender", required: false },
                { name: "relationship_age_at_diagnosis", required: false },
                { name: "relationship_disease_icd10", required: false },
                { name: "relationship_disease_name", required: false }
              ],
              children: [],
              required: false
            },
            {
              name: "comorbidity",
              fields: [
                { name: "donor_id", required: true },
                { name: "comorbidities", required: false },
                { name: "diabetes", required: false },
                { name: "duration_of_diabetes", required: false },
                { name: "hypertension_treatment", required: false },
                { name: "cause_of_pancreatitis", required: false }
              ],
              children: [],
              required: false
            },
            {
              name: "biomarkers",
              fields: [
                { name: "brca_carrier", required: false },
                { name: "er_status", required: false },
                { name: "her_status", required: false },
                { name: "progesterone status", required: false },
                { name: "ca19-9_levels", required: false },
                { name: "pd-l1_status", required: false },
                { name: "alk_status", required: false },
                { name: "ros1_status", required: false }
              ],
              children: [],
              required: false
            }
          ]
        }
      ]
    }
  ]
} as FileDef;