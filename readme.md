# Readme

## Guilde

- [https://chatgpt.com/c/677b825c-53d8-8013-90be-9d3ca8c93dfb]

### **Hướng dẫn tạo Sample Shared Library và sử dụng trong WebApp với Git Tag/Branch Version**

Dưới đây là hướng dẫn từng bước để tạo một **shared-library**, quản lý phiên bản qua **tag/branch**, và sử dụng nó trong một dự án **webapp**.

---

### **1. Tạo Shared Library**

#### **Bước 1.1: Tạo repo trên GitHub**

- Tạo một repo mới trên GitHub, ví dụ: `shared-library`.

#### **Bước 1.2: Clone repo về máy**

```bash
git clone https://github.com/your-org/shared-library.git
cd shared-library
```

#### **Bước 1.3: Tạo cấu trúc thư mục**

Tạo cấu trúc cơ bản:

```bash
mkdir src
touch src/Button.tsx
```

Thêm một component mẫu vào `src/Button.tsx`:

```tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
```

Tạo file `src/index.ts` để export component:

```tsx
export { default as Button } from "./Button";
```

#### **Bước 1.4: Tạo file `package.json`**

Khởi tạo `package.json`:

```bash
npm init -y
```

Chỉnh sửa `package.json`:

```json
{
  "name": "shared-library",
  "version": "1.0.0",
  "main": "src/index.ts",
  "dependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  }
}
```

#### **Bước 1.5: Commit và push code**

```bash
git add .
git commit -m "Initial commit with Button component"
git push origin main
```

---

### **2. Tạo Tag và Branch để quản lý phiên bản**

#### **Bước 2.1: Tạo Tag cho phiên bản**

Tạo tag `v1.0.0`:

```bash
git tag v1.0.0
git push origin v1.0.0
```

#### **Bước 2.2: Tạo Branch mới (nếu cần)**

Tạo nhánh `feature/v1.1.0`:

```bash
git checkout -b feature/v1.1.0
git push origin feature/v1.1.0
```

---

### **3. Tạo WebApp và sử dụng Shared Library**

#### **Bước 3.1: Tạo WebApp**

Tạo một dự án Next.js mới (hoặc sử dụng dự án hiện tại):

```bash
npx create-next-app@latest webapp
cd webapp
```

#### **Bước 3.2: Thêm Shared Library vào WebApp**

Thêm shared-library từ GitHub bằng **Tag** hoặc **Branch**:

- **Sử dụng Tag:**

```bash
# npm install git+https://github.com/your-org/shared-library.git#v1.0.0
npm install git@github.com:alexlevn/nextjs-submodule-shared-libraby.git#v1.0.0
```

- **Sử dụng Branch:**

```bash
# npm install git+https://github.com/your-org/shared-library.git#feature/v1.1.0
npm install git@github.com:alexlevn/nextjs-submodule-shared-libraby.git#feature/v1.1.0
```

#### **Bước 3.3: Sử dụng Component từ Shared Library**

Trong `pages/index.tsx`, import và sử dụng `Button`:

```tsx
import { Button } from "shared-library";

export default function Home() {
  return (
    <div>
      <h1>Welcome to WebApp</h1>
      <Button
        label="Click Me"
        onClick={() => alert("Hello from Shared Library!")}
      />
    </div>
  );
}
```

#### **Bước 3.4: Chạy WebApp**

Chạy ứng dụng:

```bash
npm run dev
```

---

### **4. Cập nhật Shared Library và nâng cấp WebApp**

#### **Bước 4.1: Cập nhật Shared Library**

1. Quay lại thư mục `shared-library`:

```bash
cd ../shared-library
```

2. Sửa đổi component `Button`:

   ```tsx
   const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
     return (
       <button style={{ color: "blue" }} onClick={onClick}>
         {label}
       </button>
     );
   };
   ```

3. Tăng phiên bản trong `package.json`:

   ```json
   "version": "1.0.1"
   ```

4. Commit thay đổi và tạo Tag mới:

```bash
git add .
git commit -m "Update Button style and bump version to 1.0.1"
git tag v1.0.1
git push origin v1.0.1
```

#### **Bước 4.2: Nâng cấp WebApp để dùng phiên bản mới**

Trong dự án `webapp`, nâng cấp thư viện:

```bash
npm install git+https://github.com/your-org/shared-library.git#v1.0.1
```

---

### **5. Kiểm tra và xác nhận**

1. Kiểm tra file `package-lock.json` để đảm bảo `shared-library` đang sử dụng đúng tag/branch.
2. Khởi động lại WebApp để xác nhận các thay đổi từ `shared-library` đã được áp dụng.

---

### **Tóm tắt**

1. **Shared Library**:

   - Được lưu trữ trong một repo riêng.
   - Quản lý phiên bản bằng **tag** hoặc **branch**.

2. **WebApp**:
   - Thêm `shared-library` vào `package.json` bằng Git URL.
   - Dễ dàng nâng cấp hoặc quay lại phiên bản cũ bằng cách thay đổi tag/branch.

Nếu bạn gặp khó khăn ở bất kỳ bước nào, hãy cho mình biết để hỗ trợ!
