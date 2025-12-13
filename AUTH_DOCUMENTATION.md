# Authentication System Documentation

## Overview

The authentication system includes 9 different views across 3 flows, each with 3 states:

### 1. **Login Flow** (3 views)

- `LoginDefault` - Static view with disabled inputs (preview state)
- `LoginTyped` - Interactive form with state management
- `LoginError` - Error state with invalid credentials message

### 2. **Signup Flow** (3 views)

- `SignupDefault` - Static view with disabled inputs (preview state)
- `SignupTyped` - Interactive form with password confirmation and terms checkbox
- `SignupError` - Error state showing validation errors

### 3. **Email Verification Flow** (3 views)

- `EmailVerificationDefault` - Static view with disabled code input
- `EmailVerificationTyped` - Interactive OTP input with 60-second countdown and resend button
- `EmailVerificationError` - Error state with invalid code message

---

## File Structure

```
views/auth/
├── login/
│   ├── LoginDefault.tsx
│   ├── LoginTyped.tsx
│   ├── LoginError.tsx
│   └── index.ts
├── signup/
│   ├── SignupDefault.tsx
│   ├── SignupTyped.tsx
│   ├── SignupError.tsx
│   └── index.ts
├── email-verification/
│   ├── EmailVerificationDefault.tsx
│   ├── EmailVerificationTyped.tsx
│   ├── EmailVerificationError.tsx
│   └── index.ts
app/
└── auth-demo/
    └── page.tsx (Demo page with all 9 views)
```

---

## How to View All Auth States

### Option 1: Demo Page (Recommended)

Visit: **`http://localhost:3000/auth-demo`**

This page provides:

- A sidebar menu with all 9 auth views
- Click on any view to preview it
- No routing setup needed
- Perfect for testing and reviewing all states

### Option 2: Individual Pages

Create individual pages for each auth flow in your app directory:

```tsx
// app/auth/login/page.tsx
import { LoginTyped } from "@/views/auth/login";
export default LoginTyped;

// app/auth/signup/page.tsx
import { SignupTyped } from "@/views/auth/signup";
export default SignupTyped;

// app/auth/verify-email/page.tsx
import { EmailVerificationTyped } from "@/views/auth/email-verification";
export default EmailVerificationTyped;
```

---

## Component Features

### LoginDefault & LoginTyped

- Email input field
- Password input field (masked)
- Sign In button
- Link to signup page
- Gradient blue background
- TestCube branding

**Interactive features (Typed only):**

- Form state management with `useState`
- Real-time input validation
- Submit handler for form processing
- Link to error state view

### LoginError

- Pre-filled form values (simulating previous attempt)
- Red-bordered input fields with light red background
- Error alert box with icon
- Error message: "Invalid email or password. Please try again."
- Back to login link for retry

### SignupDefault & SignupTyped

- Full Name input
- Email input
- Password input
- Confirm Password input
- Terms of Service checkbox
- Create Account button
- Link to login page

**Interactive features (Typed only):**

- All form fields with state management
- Checkbox state tracking
- Create Account button disabled until terms are accepted
- Submit handler for form processing
- Link to error state view

### SignupError

- All signup fields pre-filled with sample data
- Multiple error messages displayed:
  - "This email is already registered"
  - "Passwords do not match"
- Red-bordered inputs for fields with errors
- Error summary box at top
- Retry capability

### EmailVerificationDefault & EmailVerificationTyped

- 6-digit code input (numbers only)
- Verify Email button
- Resend Code option

**Interactive features (Typed only):**

- Real-time input validation (numbers only, max 6 digits)
- 60-second countdown timer
- Resend button disabled until countdown expires
- Countdown display: "Resend in 45s"
- Form submission handler

### EmailVerificationError

- Pre-filled with invalid code (123456)
- Red-bordered code input
- Error alert message
- Resend Code button always available
- Clear visual indication of error state

---

## Styling Details

### Color Scheme

- **Primary**: Blue (`bg-blue-600`, `focus:ring-blue-500`)
- **Error**: Red (`bg-red-50`, `border-red-300`, `text-red-700`)
- **Background**: Gradient blue (`from-blue-50 to-indigo-100`)
- **Text**: Dark gray for labels, light gray for hints

### Components Used

- Custom `Button` component from `@/components/ui/button`
- HeroUI icon: `ExclamationTriangleIcon` for error alerts
- Next.js `Link` for navigation
- Native HTML form elements with Tailwind styling

### Responsive Design

- Mobile-first approach
- Full-width cards with max-width constraint
- Touch-friendly input sizes (py-2)
- Proper spacing and padding throughout

---

## Next Steps for Integration

### 1. Form Validation

Currently, inputs are functional but don't validate. Add Yup validation:

```typescript
import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be 6+ characters").required(),
});
```

### 2. API Integration

Replace submit handlers with actual API calls:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    // Handle response
  } catch (error) {
    // Set error state
  }
};
```

### 3. State Management

For a more robust solution, consider using:

- React Context API for auth state
- Redux/Zustand for complex state
- NextAuth.js for complete auth solution

### 4. Route Protection

Add middleware to protect authenticated routes:

```typescript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken");

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}
```

---

## Testing Guidelines

1. **Test all three states** for each flow:

   - Default: Verify disabled inputs and basic layout
   - Typed: Verify form inputs and state updates
   - Error: Verify error messages and styling

2. **Test interactive features**:

   - Type in inputs (Typed views)
   - Click resend button (Email verification)
   - Check checkbox (Signup)
   - Submit forms and check console logs

3. **Test responsive design**:

   - Open DevTools (F12)
   - Test on mobile (375px), tablet (768px), desktop (1024px)
   - Verify all text is readable and buttons are clickable

4. **Test accessibility**:
   - Use keyboard to navigate (Tab key)
   - Check focus indicators (blue ring)
   - Verify labels are associated with inputs

---

## Code Example: Using LoginTyped in an App

```tsx
// app/login/page.tsx
import { LoginTyped } from "@/views/auth/login";

export const metadata = {
  title: "Login | TestCube",
  description: "Sign in to your TestCube account",
};

export default function LoginPage() {
  return <LoginTyped />;
}
```

---

## Troubleshooting

### Issue: "Module not found" error

**Solution**: Ensure path aliases in `tsconfig.json` are correct:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/views/*": ["./views/*"],
      "@/components/*": ["./components/*"]
    }
  }
}
```

### Issue: Button not styled correctly

**Solution**: Verify the custom Button component is exported from `@/components/ui/button`

### Issue: Icons not showing

**Solution**: Ensure Heroicons is installed: `npm install @heroicons/react`

### Issue: Tailwind classes not applying

**Solution**: Verify Tailwind CSS is configured in `tailwind.config.ts`

---

## Summary

✅ **9 complete auth views** - ready to integrate
✅ **3 different flows** - Login, Signup, Email Verification
✅ **3 states per flow** - Default, Interactive, Error
✅ **Demo page** - View all states at `/auth-demo`
✅ **Responsive design** - Works on mobile, tablet, desktop
✅ **Accessible UI** - Proper labels, focus states, error messages

Start with the demo page to preview all views, then customize and integrate with your backend!
