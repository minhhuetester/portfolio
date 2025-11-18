# Portfolio Madelyn Torff - UI/UX Designer

Portfolio website hiện đại và responsive được xây dựng với HTML, CSS, và JavaScript thuần.

## 🚀 Tính năng

- ✨ Thiết kế hiện đại và chuyên nghiệp
- 📱 Hoàn toàn responsive (desktop, tablet, mobile)
- 🎨 UI/UX đẹp mắt với màu sắc bắt mắt
- 🔄 Hiệu ứng smooth scroll và animations
- 📋 Menu mobile với hamburger menu
- 🎯 Intersection Observer cho fade-in effects
- ⚡ Performance tối ưu

## 📂 Cấu trúc dự án

```
/
├── index.html       # File HTML chính
├── styles.css       # File CSS styling
├── script.js        # File JavaScript
└── README.md        # Tài liệu hướng dẫn
```

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc trang web semantic
- **CSS3** - Styling với Flexbox, Grid, Animations
- **JavaScript (ES6+)** - Tương tác và hiệu ứng động
- **Google Fonts** - Typography (Playfair Display & Poppins)
- **Font Awesome** - Icons cho social media

## 🎨 Màu sắc chủ đạo

- Primary: `#FFC107` (Vàng)
- Dark: `#2C2C2C` (Xám đen)
- Gray: `#757575` (Xám)
- Light Gray: `#F5F5F5` (Xám nhạt)
- White: `#FFFFFF` (Trắng)

## 📦 Cài đặt và Sử dụng

### Cách 1: Mở trực tiếp

1. Clone hoặc download dự án
2. Mở file `index.html` bằng trình duyệt web

### Cách 2: Sử dụng Live Server (Khuyên dùng)

1. Cài đặt Live Server extension trong VS Code
2. Right-click vào `index.html`
3. Chọn "Open with Live Server"

### Cách 3: Sử dụng Python Server

```bash
# Python 3
python -m http.server 8000

# Sau đó mở: http://localhost:8000
```

## 🎯 Các sections

1. **Navigation** - Menu điều hướng cố định với responsive mobile menu
2. **Hero Section** - Giới thiệu bản thân với ảnh đại diện
3. **Projects Section** - Showcase các dự án với layout đẹp mắt
4. **Footer** - Social media links và copyright

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## ✨ Tính năng JavaScript

- **Mobile Menu Toggle** - Menu hamburger cho mobile
- **Smooth Scrolling** - Cuộn mượt mà giữa các sections
- **Navbar Scroll Effect** - Hiệu ứng khi scroll
- **Intersection Observer** - Fade-in animations khi scroll
- **Active Nav Links** - Highlight link tương ứng với section đang xem
- **Parallax Effect** - Hiệu ứng parallax cho hero image

## 🔧 Tùy chỉnh

### Thay đổi màu sắc

Chỉnh sửa CSS variables trong file `styles.css`:

```css
:root {
    --primary-color: #FFC107;
    --dark-color: #2C2C2C;
    --gray-color: #757575;
    --light-gray: #F5F5F5;
    --white-color: #FFFFFF;
}
```

### Thay đổi nội dung

- Chỉnh sửa file `index.html` để cập nhật text, links
- Thay thế URLs ảnh bằng ảnh của bạn
- Cập nhật social media links trong footer

### Thêm/Xóa Projects

Copy và paste block `.project-card` trong section projects:

```html
<div class="project-card">
    <div class="project-text">
        <h3 class="project-title">Tên Project</h3>
        <p class="project-description">Mô tả project...</p>
        <a href="#" class="btn btn-outline">View Project</a>
    </div>
    <div class="project-image">
        <img src="image-url.jpg" alt="Project">
    </div>
</div>
```

## 📸 Hình ảnh

Hiện tại portfolio sử dụng placeholder images từ Unsplash. Để thay thế:

1. Chuẩn bị ảnh của bạn (khuyến nghị: JPG/PNG, tối ưu kích thước)
2. Đặt ảnh vào folder (vd: `/images`)
3. Cập nhật src trong các thẻ `<img>` trong `index.html`

```html
<!-- Ví dụ -->
<img src="images/hero-photo.jpg" alt="Your Name">
```

## 🌐 Deploy

Portfolio này có thể deploy lên:

- **GitHub Pages** - Miễn phí, dễ dùng
- **Netlify** - Miễn phí, CI/CD
- **Vercel** - Miễn phí, nhanh
- **Firebase Hosting** - Miễn phí, Google
- Bất kỳ static hosting nào

### Deploy lên GitHub Pages:

1. Push code lên GitHub repository
2. Vào Settings > Pages
3. Chọn branch main, folder root
4. Save và đợi deploy

## 📝 License

Free to use for personal and commercial projects.

## 👨‍💻 Tác giả

Được tạo bởi Senior Fullstack Developer với 10 năm kinh nghiệm.

## 🤝 Đóng góp

Mọi đóng góp và feedback đều được hoan nghênh!

---

**Note:** Đây là template portfolio, bạn có thể tùy chỉnh theo ý muốn. Thay đổi nội dung, màu sắc, layout để phù hợp với phong cách cá nhân của bạn!

