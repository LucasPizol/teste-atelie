export const forms = {
  forms: [
    {
      id: 1,
      name: "Form",
      fields: [
        {
          section: "Autorefrator dinâmico",
          fields: [
            {
              section: "Olho Direito",
              fields: [
                {
                  id: 1,
                  name: "text field",
                  type: "text",
                  value: "TESTE",
                  checked: null,
                  options: null,
                },
                {
                  id: 2,
                  name: "select field",
                  type: "select",
                  value: "test_2",
                  checked: null,
                  options: ["test_1", "test_2", "test_3"],
                },
                {
                  id: 3,
                  name: "radio field",
                  type: "radio",
                  value: "1.5",
                  checked: true,
                  options: ["1.0", "1.5", "2.0"],
                },
              ],
            },
            {
              section: "Olho Esquerdo",
              fields: [
                {
                  id: 1,
                  name: "text field",
                  type: "text",
                  value: "TESTE",
                  checked: null,
                  options: null,
                },
                {
                  id: 2,
                  name: "select field",
                  type: "select",
                  value: "test_2",
                  checked: null,
                  options: ["test_1", "test_2", "test_3"],
                },
                {
                  id: 3,
                  name: "radio field",
                  type: "radio",
                  value: "1.5",
                  checked: true,
                  options: ["1.0", "1.5", "2.0"],
                },
              ],
            },
          ],
        },
        {
          section: "Ceratometria",
          fields: [
            {
              section: "Olho Direito",
              fields: [
                {
                  id: 1,
                  name: "text field",
                  type: "text",
                  value: "TESTE",
                  checked: null,
                  options: null,
                },
                {
                  id: 2,
                  name: "select field",
                  type: "select",
                  value: "test_2",
                  checked: null,
                  options: ["test_1", "test_2", "test_3"],
                },
                {
                  id: 3,
                  name: "radio field",
                  type: "radio",
                  value: "1.5",
                  checked: true,
                  options: ["1.0", "1.5", "2.0"],
                },
              ],
            },
            {
              section: "Olho Esquerdo",
              fields: [
                {
                  id: 1,
                  name: "text field",
                  type: "text",
                  value: "TESTE",
                  checked: null,
                  options: null,
                },
                {
                  id: 2,
                  name: "select field",
                  type: "select",
                  value: "test_2",
                  checked: null,
                  options: ["test_1", "test_2", "test_3"],
                },
                {
                  id: 3,
                  name: "radio field",
                  type: "radio",
                  value: "1.5",
                  checked: true,
                  options: ["1.0", "1.5", "2.0"],
                },
              ],
            },
          ],
        },
        {
          section: "Ceratometria",
          fields: [
            {
              section: "Olho Direito",
              fields: [
                {
                  id: 1,
                  name: "text field",
                  type: "text",
                  value: "TESTE",
                  checked: null,
                  options: null,
                  form_name: "olho_direto_field",
                },
                {
                  id: 2,
                  name: "select field",
                  type: "select",
                  value: "test_2",
                  checked: null,
                  options: ["test_1", "test_2", "test_3"],
                  form_name: "olho_direto_select_field",
                },
                {
                  id: 3,
                  name: "radio field",
                  type: "radio",
                  value: "1.5",
                  checked: true,
                  options: ["1.0", "1.5", "2.0"],
                  form_name: "olho_direto_radio_field",
                },
              ],
            },
            {
              section: "Olho Esquerdo",
              fields: [
                {
                  id: 1,
                  name: "text field",
                  type: "text",
                  value: "TESTE",
                  checked: null,
                  options: null,
                },
                {
                  id: 2,
                  name: "select field",
                  type: "select",
                  value: "test_2",
                  checked: null,
                  options: ["test_1", "test_2", "test_3"],
                },
                {
                  id: 3,
                  name: "radio field",
                  type: "radio",
                  value: "1.5",
                  checked: true,
                  options: ["1.0", "1.5", "2.0"],
                },
                {
                  id: 3,
                  name: "Adição",
                  type: "select",
                  value: "1.5",
                  checked: true,
                  options: ["1.0", "1.5", "2.0"],
                },
              ],
            },
            {
              section: "Anotações Gerais",
              fields: [
                {
                  id: 1,
                  name: "text field",
                  type: "textarea",
                  value: "TESTE",
                  checked: null,
                  options: null,
                },
              ],
            },
          ],
        },
      ],
      patient_id: 1,
    },
    {
      id: 2,
      name: "Form",
      fields: [
        {
          section: "Olho Direito",
          fields: [
            {
              id: 1,
              name: "text field",
              type: "text",
              value: "hey ho let's go",
              checked: null,
              options: null,
            },
            {
              id: 2,
              name: "select field",
              type: "select",
              value: "test_3",
              checked: null,
              options: ["test_1", "test_2", "test_3"],
            },
            {
              id: 3,
              name: "check field",
              type: "checkbox",
              value: "no",
              checked: true,
              options: [
                {
                  checked: true,
                  value: "yes",
                },
                {
                  checked: false,
                  value: "no",
                },
              ],
            },
          ],
        },
      ],

      patient_id: 2,
    },
  ],
};
