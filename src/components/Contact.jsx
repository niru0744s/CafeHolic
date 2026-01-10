import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Contact() {
    return (
        <section
        id="contact"
            className="relative overflow-hidden py-28"
            style={{
                backgroundImage:
                    "url('/images/contact-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/65" />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="grid gap-16 md:grid-cols-2 items-center">

                    {/* LEFT: Contact Info */}
                    <div className="max-w-md animate-fadeUp">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white">
                            Have Questions?
                        </h2>

                        <p className="mt-6 text-white/70 leading-relaxed">
                            Contact us for order details, support, or any questions
                            about our coffee and services. We’re always happy to help.
                        </p>

                        <div className="mt-8 space-y-5">

                            {/* Phone */}
                            <div className="flex items-center gap-4 text-white/80">
                                <span className="flex h-10 w-10 items-center justify-center
      rounded-full border border-primary/40 text-primary">
                                    <PhoneIcon fontSize="small" />
                                </span>
                                <span className="text-sm">
                                    +91 99999 99999
                                </span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-4 text-white/80">
                                <span className="flex h-10 w-10 items-center justify-center
      rounded-full border border-primary/40 text-primary">
                                    <EmailIcon fontSize="small" />
                                </span>
                                <span className="text-sm">
                                    niruk792@gmail.com
                                </span>
                            </div>
                            {/* Location */}
                            <div className="flex items-center gap-4 text-white/80">
                                <span className="flex h-10 w-10 items-center justify-center
      rounded-full border border-primary/40 text-primary">
                                    <LocationOnIcon fontSize="small" />
                                </span>
                                <span className="text-sm">
                                    WB , Kolkata
                                </span>
                            </div>
                        </div>

                        <p className="mt-6 text-white font-medium">
                            We look forward to hearing from you!
                        </p>
                    </div>

                    {/* RIGHT: Form */}
                    <div className="animate-fadeUp [animation-delay:200ms]">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="rounded-2xl bg-black/50 backdrop-blur-md
              p-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                        >
                            <div className="space-y-5">

                                {/* Phone */}
                                <TextField
                                    label="Email"
                                    type="email"
                                    variant="standard"
                                    fullWidth
                                    InputLabelProps={{
                                        style: { color: "rgba(255,255,255,0.6)" },
                                    }}
                                    InputProps={{
                                        style: { color: "#fff" },
                                    }}
                                    sx={{
                                        "& .MuiInput-underline:before": {
                                            borderBottomColor: "rgba(255,255,255,0.25)",
                                        },
                                        "& .MuiInput-underline:hover:before": {
                                            borderBottomColor: "#d4a373",
                                        },
                                        "& .MuiInput-underline:after": {
                                            borderBottomColor: "#d4a373",
                                        },
                                    }}
                                />

                                {/* Email */}
                                <TextField
                                    label="message"
                                    variant="standard"
                                    type="text"
                                    fullWidth
                                    InputLabelProps={{
                                        style: { color: "rgba(255,255,255,0.6)" },
                                    }}
                                    InputProps={{
                                        style: { color: "#fff" },
                                    }}
                                    sx={{
                                        "& .MuiInput-underline:before": {
                                            borderBottomColor: "rgba(255,255,255,0.25)",
                                        },
                                        "& .MuiInput-underline:hover:before": {
                                            borderBottomColor: "#d4a373",
                                        },
                                        "& .MuiInput-underline:after": {
                                            borderBottomColor: "#d4a373",
                                        },
                                    }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 4,
                                        py: 1.5,
                                        borderRadius: "9999px",
                                        backgroundColor: "#d4a373", // your primary orange
                                        color: "#000",
                                        fontSize: "0.875rem",
                                        fontWeight: 500,
                                        textTransform: "none",
                                        boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
                                        "&:hover": {
                                            backgroundColor: "#e0b185",
                                        },
                                        "&:active": {
                                            transform: "scale(0.97)",
                                        },
                                    }}
                                >
                                    Submit
                                </Button>


                            </div>


                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
