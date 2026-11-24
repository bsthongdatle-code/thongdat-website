# Học bài thôi

## Cấu trúc
- `index.html`: trang chủ
- `study/index.html`: demo thư viện học tập
- `nawish.html`: trang Nahida hiện có của bạn (đặt file tại thư mục gốc)
- `furina/index.html`: trang ảnh và lời yêu thương
- `assets/css/style.css`: giao diện chung
- `assets/js/main.js`: đổi theme, menu mobile, tìm kiếm và xem trước ảnh

## Hoàn thiện trước khi tải lên GitHub
1. Đặt `favicon.png` của bạn cạnh `index.html` ở thư mục gốc.
2. Sao chép file HTML Nahida hiện có thành `nawish.html` và đặt cạnh `index.html`.
3. Đưa ảnh muốn công khai vào `furina/images/`. Sau đó thêm các thẻ `<img src="/furina/images/ten-anh.jpg">` vào `furina/index.html`.
4. Giữ nguyên cấu trúc thư mục khi tải lên repository.

## GitHub Pages
Repository Settings → Pages → Deploy from a branch → chọn `main` (hoặc branch đang được Pages sử dụng) → `/ (root)`.
Nếu bạn triển khai bằng custom domain `thongdat.xyz`, đường dẫn gốc `/assets/...` và `/favicon.png` hoạt động như thiết kế. Nếu dùng URL dạng `username.github.io/repository/`, cần đổi các đường dẫn bắt đầu bằng `/` thành đường dẫn tương đối hoặc cấu hình base path tương ứng.

## Favicon
Tất cả trang đang dùng:
`<link rel="icon" href="/favicon.png?v=2" type="image/png">`
