import { Container, Typography, Stack } from "@mui/material";

export default function TermOfUse() {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>
        Terms of Use – Blue Bell
      </Typography>

      <Stack spacing={2}>
        <Typography variant="h6">1. Use of Our Services</Typography>
        <Typography>
          - Blue Bell is provided for personal, non-commercial use.
          <br />- You agree not to misuse or harm the platform.
          <br />- We may suspend access if you violate these terms.
        </Typography>

        <Typography variant="h6">2. User Accounts</Typography>
        <Typography>
          - You are responsible for keeping your account secure.
          <br />- Do not share your login details with others.
          <br />- We are not liable for unauthorized access to your account.
        </Typography>

        <Typography variant="h6">3. Privacy and Data Protection</Typography>
        <Typography>
          - We respect your privacy. Check our <strong>Privacy Policy</strong>{" "}
          for details on data usage.
          <br />- By using Blue Bell, you agree to the collection and processing
          of necessary data.
        </Typography>

        <Typography variant="h6">4. Prohibited Activities</Typography>
        <Typography>
          You may not:
          <br />- Use Blue Bell for illegal or harmful activities.
          <br />- Spread spam, malware, or any harmful content.
          <br />- Attempt to hack or disrupt the platform.
        </Typography>

        <Typography variant="h6">5. Intellectual Property</Typography>
        <Typography>
          - All content in Blue Bell belongs to us or our licensors.
          <br />- Do not copy, modify, or distribute our content without
          permission.
        </Typography>

        <Typography variant="h6">6. Limitation of Liability</Typography>
        <Typography>
          - Blue Bell is provided "as is" without warranties.
          <br />- We are not responsible for any issues caused by using our
          services.
        </Typography>

        <Typography variant="h6">7. Changes to These Terms</Typography>
        <Typography>
          - We may update these terms from time to time.
          <br />- Continued use of Blue Bell means you accept any updates.
        </Typography>
      </Stack>
    </Container>
  );
}
