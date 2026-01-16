import React from "react";
import { Outlet } from "react-router";
import Container from "../../components/Container/Container";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <Container>
        <div className="flex min-h-screen items-center justify-center py-10">
          <div className="grid w-full max-w-5xl grid-cols-1 gap-10 overflow-hidden rounded-2xl bg-base-100 shadow-2xl lg:grid-cols-2">
            {/* Left: Branding Section */}
            <div className="hidden flex-col justify-center bg-primary px-10 py-12 text-primary-content lg:flex">
              <h1 className="text-4xl font-bold leading-tight">
                Welcome to <span className="text-secondary">BookNest</span>
              </h1>
              <p className="mt-4 text-lg opacity-90">
                Explore knowledge, share thoughts, and grow with books.
              </p>

              <div className="mt-8">
                <ul className="space-y-2 text-sm opacity-80">
                  <li>📚 Discover amazing books</li>
                  <li>✍️ Write reviews & ratings</li>
                  <li>🤝 Join a book-loving community</li>
                </ul>
              </div>
            </div>

            {/* Right: Auth Form */}
            <div className="flex items-center justify-center px-6 py-10 sm:px-10">
              <div className="w-full max-w-md">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
