import { Box, Typography } from '@mui/material'
import { company } from '@/data/company'
import { navLinks } from '@/data/links'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box bgcolor="#111" color="white" p={4}>
      <Typography variant="h6">{company.name}</Typography>

      <Typography>{company.phone}</Typography>
      <Typography>{company.email}</Typography>

      <Box mt={2}>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path}>
            <Typography>{link.name}</Typography>
          </Link>
        ))}
      </Box>
      <Typography variant="body2">
        © {new Date().getFullYear()} AIPA Travels
      </Typography>
    </Box>
  )
}