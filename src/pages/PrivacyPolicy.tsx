import { Container, Typography, Stack } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy – Blue Bell
      </Typography>

      <Stack spacing={2}>
        <Typography variant="h6">1. Introduction</Typography>
        <Typography>
          - Your privacy is important to us. This policy explains how we
          collect, use, and protect your data.
          <br />- By using Blue Bell, you agree to the terms outlined in this
          policy.
        </Typography>

        <Typography variant="h6">2. Information We Collect</Typography>
        <Typography>
          - We collect personal information such as your name, email, and phone
          number when you register.
          <br />- Usage data (e.g., interactions with our services) may also be
          collected for analytics.
        </Typography>

        <Typography variant="h6">3. How We Use Your Information</Typography>
        <Typography>
          - To provide and improve our services.
          <br />- To communicate with you regarding updates, offers, or
          important notices.
          <br />- To ensure security and prevent fraud.
        </Typography>

        <Typography variant="h6">4. Data Sharing & Security</Typography>
        <Typography>
          - We do not sell your personal data.
          <br />- Your information is stored securely and protected from
          unauthorized access.
          <br />- We may share data with third-party services necessary for
          service operation (e.g., payment providers).
        </Typography>

        <Typography variant="h6">5. Your Rights</Typography>
        <Typography>
          - You have the right to access, update, or delete your personal data.
          <br />- You can opt out of promotional communications at any time.
        </Typography>

        <Typography variant="h6">6. Changes to This Policy</Typography>
        <Typography>
          - We may update this policy periodically.
          <br />- Continued use of Blue Bell after changes means you accept the
          updated policy.
        </Typography>
      </Stack>
    </Container>
  );
}
