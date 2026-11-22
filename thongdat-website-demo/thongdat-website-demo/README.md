# ThongDat.xyz — website demo

Website tĩnh dùng HTML và CSS, phù hợp triển khai bằng GitHub Pages.

## Cấu trúc

```text
thongdat-website-demo/
├── index.html
├── README.md
├── assets/
│   └── css/
│       └── style.css
├── study/
│   └── index.html
├── nahida/
│   └── index.html
└── furina/
    ├── index.html
    └── images/
        ├── photo-01.svg
        ├── photo-02.svg
        ├── photo-03.svg
        └── photo-04.svg
```

## Đưa lên GitHub Pages

1. Giải nén ZIP.
2. Mở repository `thongdat-website` trên GitHub.
3. Tải các file và thư mục bên trong `thongdat-website-demo` lên thư mục gốc của repository (không tạo thêm một lớp thư mục `thongdat-website-demo`).
4. Giữ cấu hình Pages ở `main` và `/ (root)`.
5. Chờ GitHub Pages triển khai xong rồi mở domain của bạn.

Nếu repository đã có `index.html`, hãy sao lưu bản cũ trước khi thay bằng trang chủ demo.

## Đưa file Nahida hiện có vào website

File `nahida/index.html` trong demo chỉ là trang giữ chỗ. Sao chép nội dung file HTML Nahida hoàn chỉnh của bạn vào đúng vị trí này. Nếu file gốc có thư mục ảnh, CSS hoặc JavaScript đi kèm, hãy tải các thư mục đó vào `nahida/` và giữ đúng đường dẫn tương đối mà HTML đang sử dụng.

## Thay ảnh mẫu của Furina

1. Mở `furina/index.html`.
2. Thay `images/photo-01.svg` bằng tên file ảnh của bạn, ví dụ `images/photo-01.jpg`.
3. Tải ảnh đó vào `furina/images/`.
4. Làm tương tự với các ảnh còn lại. Có thể nhân bản một khối `<figure class="gallery-item">` để thêm ảnh.

Ảnh tải lên repository công khai có thể được người khác truy cập. Không đưa ảnh riêng tư lên repository công khai.

## Ghi chú

- Trang chủ và Study Library dùng chung `assets/css/style.css`.
- Đây là demo tĩnh: danh mục Study chưa mở tài liệu và website chưa có chức năng tải ảnh trực tiếp từ trình duyệt.
- Font chữ được tải từ Google Fonts; nếu không có kết nối mạng, website tự dùng font dự phòng.
