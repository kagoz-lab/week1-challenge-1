# Net Salary Calculation

## Description

The `calculateNetSalary` function calculates the net salary of an employee by considering the following deductions:
- **PAYE** (Pay As You Earn) tax: A progressive income tax system based on the gross salary.
- **NHIF** (National Hospital Insurance Fund): A deduction for health insurance based on the gross salary.
- **NSSF** (National Social Security Fund): A pension contribution, divided into two tiers with different contribution rates.

### Salary Calculation Process:
1. **Gross Salary**: Sum of the basic salary and benefits.
2. **PAYE Calculation**: Based on income brackets.
3. **NHIF Calculation**: A fixed amount deducted based on salary brackets.
4. **NSSF Calculation**: Contributions divided into two tiers:
   - Tier 1: For salaries up to Ksh 7,000.
   - Tier 2: For salaries between Ksh 7,000 and Ksh 36,000.
5. **Total Deductions**: Sum of PAYE, NHIF, and NSSF.
6. **Net Salary**: Gross salary minus total deductions.

## Code

```javascript
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE Calculations
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = grossSalary * 0.25;
    } else if (grossSalary <= 500000) {
        paye = grossSalary * 0.3;
    } else if (grossSalary <= 800000) {
        paye = grossSalary * 0.325;
    } else {
        paye = grossSalary * 0.35;
    }

    // NHIF Deductions
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        n
# Net Salary Calculation

## Description

The `calculateNetSalary` function calculates the net salary of an employee by considering the following deductions:
- **PAYE** (Pay As You Earn) tax: A progressive income tax system based on the gross salary.
- **NHIF** (National Hospital Insurance Fund): A deduction for health insurance based on the gross salary.
- **NSSF** (National Social Security Fund): A pension contribution, divided into two tiers with different contribution rates.

### Salary Calculation Process:
1. **Gross Salary**: Sum of the basic salary and benefits.
2. **PAYE Calculation**: Based on income brackets.
3. **NHIF Calculation**: A fixed amount deducted based on salary brackets.
4. **NSSF Calculation**: Contributions divided into two tiers:
   - Tier 1: For salaries up to Ksh 7,000.
   - Tier 2: For salaries between Ksh 7,000 and Ksh 36,000.
5. **Total Deductions**: Sum of PAYE, NHIF, and NSSF.
6. **Net Salary**: Gross salary minus total deductions.

## Code

```javascript
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE Calculations
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = grossSalary * 0.25;
    } else if (grossSalary <= 500000) {
        paye = grossSalary * 0.3;
    } else if (grossSalary <= 800000) {
        paye = grossSalary * 0.325;
    } else {
        paye = grossSalary * 0.35;
    }

    // NHIF Deductions
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        n
