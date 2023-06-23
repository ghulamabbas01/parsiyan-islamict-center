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
          service_id: "service_1ce3oq4",
          template_id: "template_6zcr1tn",
          user_id: "L7LjjRX4cJF8Hyx4I",
          template_params: {
            to_email: "parsiyan03@gmail.com",
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
    <div className="pt-[120px] pb-10 ">
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
        <div className="relative w-full h-96 mt-10 mb-5">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.3508089307516!2d-121.36684918958143!3d38.61780997166734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809adbfb41b6b3d1%3A0x34e36d3bc6a81720!2s2894%20Eastern%20Ave%2C%20Sacramento%2C%20CA%2095821!5e0!3m2!1sen!2sus!4v1687542621990!5m2!1sen!2sus"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="">
          {/* from section  */}
          <Stack className="form-section bg-green-100 border border-green-600 rounded-lg">
            <Box className="form-feed md:px-48">
              {/* grid form feed 1  */}
              <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                  <Grid container spacing={2} mt={{ md: 2, xs: 0 }}>
                    <Grid item xs={12} md={6}>
                      <h5 className="mb-2 font-semibold">First Name</h5>
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
                      <h5 className="mb-2 font-semibold">Last Name</h5>
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
                      <h5 className="mb-2 font-semibold">Email </h5>
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
                      <h5 className="mb-2 font-semibold">Phone No</h5>
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
                    // direction="row"
                    mt={{ md: 4, xs: 2 }}
                    mb={4}
                  >
                    <h5 className="mb-2 font-semibold">Message</h5>
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
                    className="text-white rounded-lg bg-green-600 hover:bg-green-800 py-3 px-5 text-sm font-medium text-center "
                    loading={loading}
                  >
                    send message
                  </LoadingButton>
                  <div className="mb-10"></div>
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
