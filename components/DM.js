import React, { useState } from "react";
import { CircularProgress, Grid, InputLabel, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function DM() {
  const [responseMessage, setResponseMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.target);
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbw05rscaAoG3K6sJIdk_acQnND6AMuu6vbawSHhGwOWjZPoBqDei0pK5mOgljtWTETJRA/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    const message = await response.text();
    setSubmitting(false);
    setResponseMessage(message);
  };

  return (
    <div className="my-2">
      <Grid container>
        <Grid xs={12} sx={{ boxShadow: 1, borderRadius: 2, padding: 3 }}>
          <p class="text-2xl font-bold mb-4">Drop Message</p>
          <form onSubmit={handleSubmit}>
            <div class="w-full mb-4 ">
              <InputLabel htmlFor="name-input" sx={{ mb: 1 }}>
                Your name
              </InputLabel>

              <TextField id="name-input" name="Name" required fullWidth />
            </div>

            <div class="w-full mb-4 ">
              <InputLabel htmlFor="email-input" sx={{ mb: 1 }}>
                Email address
              </InputLabel>

              <TextField
                id="email-input"
                type="email"
                name="Email"
                required
                fullWidth
              />
            </div>

            <div class="w-full mb-8 ">
              <InputLabel htmlFor="name-input" sx={{ mb: 1 }}>
                Message
              </InputLabel>

              <TextField
                placeholder="Write here..."
                id="message-input"
                name="Message"
                multiline
                rows={4}
                fullWidth
                required
              />
            </div>

            <div class="w-full mb-2 ">
              <button
                type="submit"
                class="w-full button-19 bg-gradient-to-r from-green-500 to-green-300 hover:from-green-700 hover:to-green-500 text-dark text-1xl  py-3 px-4  rounded-full shadow-md"
                role="button"
                disabled={submitting}
              >
                {submitting ? (
                  <CircularProgress size={18} sx={{ color: "white" }} />
                ) : (
                  "Submit"
                )}
              </button>

              {responseMessage && (
                <Alert
                  icon={<CheckIcon fontSize="inherit" />}
                  severity="success"
                  sx={{ marginTop: 3 }}
                >
                  {responseMessage}
                </Alert>
              )}
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
