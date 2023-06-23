import React from "react";
import { Box, Stack, Typography, Grid, TextField } from "@mui/material";

import * as Yup from "yup";
import { useFormik, Form, FormikProvider } from "formik";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import toast from "react-hot-toast";
import Container from "@/components/Container";

const ContactUs = () => {
  const [loading, setLoading] = React.useState(false);
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("email-is-required")
      .required("email-is-required"),
    firstName: Yup.string().required("first-name-is-required"),
    lastName: Yup.string().required("last-name-is-required"),
    phone: Yup.number().required("phone-number-is-required"),
    message: Yup.string().required("message-is-required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      message: "",
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);

        var data = JSON.stringify({
          service_id: "service_1eepph5",
          template_id: "template_akckxrp",
          user_id: "94RLbs1Hos_WVkb4Z",
          template_params: {
            to_email: "ak6119231@gmail.com",
            subject: "Verify your email",
            from_name: "",
            message: "",
          },
        });

        var config = {
          method: "post",
          url: "https://api.emailjs.com/api/v1.0/email/send",
          headers: {
            "Content-Type": "application/json",
            origin: "http://localhost",
          },
          data: data,
        };
        axios(config)
          .then(function (response) {
            toast.success("email sent");
            setLoading(false);
            resetForm();
          })
          .catch(function (error) {
            toast.error("Something went wrong!");
            setLoading(false);
            resetForm();
          });
      } catch (error) {
        console.error(error);
      }
    },
  });
  const { errors, touched, handleSubmit, getFieldProps } = formik;
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.SERVICE_SID;
  console.log(accountSid, authToken);

  return (
    <div className="pt-[120px] pb-10">
      <div className="bg-green-600 w-full p-10 border ">
        <h1 className=" text-center text-white  font-bold text-5xl">
          Contact Us
        </h1>
        <p class=" font-light text-center text-white md:w-[700px] mx-auto my-5  sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
      </div>

      <Container>
        <div className="md:px-48">
          {/* from section  */}
          <Stack className="form-section">
            <Box className="form-feed">
              {/* grid form feed 1  */}
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Grid container spacing={2} mt={{ md: 2, xs: 0 }}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label={"First name"}
                        className="text-feed"
                        fullWidth
                        {...getFieldProps("firstName")}
                        error={Boolean(touched.firstName && errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label={"Last name"}
                        className="text-feed"
                        fullWidth
                        {...getFieldProps("lastName")}
                        error={Boolean(touched.lastName && errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                  </Grid>
                  {/* grid form feed one  */}
                  {/* grid form feed 2  */}
                  <Grid container spacing={2} mt={{ md: 2, xs: 0 }}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label={"Your email"}
                        className="text-feed"
                        fullWidth
                        {...getFieldProps("email")}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label={"Your phone"}
                        className="text-feed"
                        fullWidth
                        {...getFieldProps("phone")}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    </Grid>
                  </Grid>
                  {/* grid form feed 2  */}
                  <Stack
                    spacing={2}
                    direction="row"
                    mt={{ md: 4, xs: 2 }}
                    mb={4}
                  >
                    <TextField
                      label={"Your message"}
                      multiline
                      rows={5}
                      fullWidth
                      {...getFieldProps("message")}
                      error={Boolean(touched?.message && errors?.message)}
                      helperText={touched?.message && errors?.message}
                    />
                  </Stack>
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    size="large"
                    className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-800"
                    loading={loading}
                  >
                    send message
                  </LoadingButton>
                  {/* <Button variant="contained" size="large">
                Send Message
              </Button> */}
                </Form>
              </FormikProvider>
            </Box>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
