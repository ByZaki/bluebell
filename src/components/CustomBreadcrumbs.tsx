import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { Link } from "react-router";

interface IChildren {
  children: string;
}

export default function CustomBreadcrumbs({ children }: IChildren) {
  return (
    <>
      <Stack>
        <Breadcrumbs>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Home
          </Link>
          <Typography sx={{ color: "text.primary" }}>{children}</Typography>
        </Breadcrumbs>
      </Stack>
    </>
  );
}
