export const navItems = [
  { name: "Dashboard", page: "dashboard" },
  {
    name: "Administrator",
    page: "administrator",
    children: [
      { name: "Company Group", page: "administrator/company-group" },
      { name: "Company", page: "administrator/company" },
      { name: "Branch", page: "administrator/branch" },
      { name: "Bank", page: "administrator/bank" },
      { name: "Bank Allow", page: "administrator/bank-allow" },
      { name: "User", page: "administrator/user" },
    ],
  },
  {
    name: "Payment Management",
    page: "payment-management",
    children: [
      { name: "Cash", page: "payment/cash" },
      { name: "Instrument", page: "payment/instrument" },
      { name: "Posting Bank", page: "payment/posting" },
      { name: "Tally Bounce Cheque", page: "payment/tally" },
      { name: "Rpt Instrument", page: "payment/rpt-instrument" },
      { name: "Rpt Cash", page: "payment/rpt-cash" },
      { name: "Rpt Ins Postdate", page: "payment/rpt-ins-postdate" },
      { name: "Rpt Group Cash In Hand", page: "payment/rpt-groupcash" },
      { name: "Rpt Cash Cross Bank", page: "payment/rpt-crossbank" },
      { name: "Rpt Closing Cash", page: "payment/rpt-closing" },
    ],
  },
  {
    name: "Setting",
    page: "setting",
    children: [
      { name: "Left Menu", page: "setting/left-menu" },
      { name: "Dealership", page: "setting/dealership" },
      { name: "Subsource", page: "setting/subsource" },
      { name: "Department", page: "setting/department" },
    ],
  },
];
