# Use the specific Playwright image with Chromium as the browser
FROM mcr.microsoft.com/playwright:v1.36.0-jammy

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) to the container
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Run the Playwright tests using npm test (adjust as per your test setup)
CMD ["npx", "playwright", "test"]
