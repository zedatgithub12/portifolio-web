import React from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function DM() {
  return (
    <div className="my-2">
      <Grid container>
        <Grid xs={12} sx={{ boxShadow: 1, borderRadius: 2, padding: 3 }}>
          <p class="text-2xl font-bold mb-4">Drop Message</p>
          <form>
            <div class="w-full mb-4 ">
              <InputLabel htmlFor="name-input" sx={{ mb: 1 }}>
                Your name
              </InputLabel>

              <TextField id="name-input" required fullWidth />
            </div>

            <div class="w-full mb-4 ">
              <InputLabel htmlFor="email-input" sx={{ mb: 1 }}>
                Email address
              </InputLabel>

              <TextField id="email-input" type="email" required fullWidth />
            </div>

            <div class="w-full mb-8 ">
              <InputLabel htmlFor="name-input" sx={{ mb: 1 }}>
                Message
              </InputLabel>

              <TextField
                placeholder="Write here..."
                id="message-input"
                multiline
                rows={4}
                fullWidth
                required
              />
            </div>

            <div class="w-full mb-2 ">
              <button
                class="w-full button-19 bg-gradient-to-r from-green-500 to-green-300 hover:from-green-700 hover:to-green-500 text-dark text-1xl  py-3 px-4  rounded-full shadow-md"
                role="button"
              >
                Submit
              </button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
