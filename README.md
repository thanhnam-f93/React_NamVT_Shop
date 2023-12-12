# NamVT-Complex-APP

Description of project.

## Introduction

Project tổng cuối khóa traning ReactJs - Mock project mini web xem phim ...

## Features

### Signup
- Chức năng: Đăng ký vào hệ thống để có thể tạo mới tài khoản người dùng
- Yêu cầu: Nhập đầy đủ tất cả các trường thông tin bắt buộc bao gồm : Name; Username hoặc Email; Mật khẩu
- Mô tả: Sau khi nhập các thông tin hợp lệ có thể tạo mới tài khoản người dùng mới với quyền mặc định của user
    - Đăng ký thành công: Tạo mới tài khoản và gửi email xác thực theo địa chỉ mail người dùng cung cấp và ridirect về trang xem phim đồng thời lưu lại phiên đăng nhập của người dùng.
    - Đăng ký thất bại: Không tạo tài khoản và thông báo lỗi cho người dùng.
- Note: Nếu người dùng thêm địa chỉ email không hợp lệ và nhấn nút đăng nhập, hệ thống sẽ gửi thông báo cảnh báo.
### Login
-  Chức năng: Đăng nhập vào hệ thống để có thể sử dụng tất cả các chức năng của APP: Nếu không login thì sẽ không thể sử dụng chức năng quản lý (Admin role) và sẽ cần thiết phải login để có thể tiến hành mua phim (user role).
- Yêu cầu: Nhập đúng tài khoản và mật khẩu đã đăng ký, pass validation data.
- Mô tả: Nếu đăng nhập hợp lệ thì: Tiến hành lưu lại thông tin của User để hệ thống nhận biết
    - Với Role Admin: Điêu hướng tới trang Quản lý phim .
    - Với Role user: Điều hướng tới trang xem phim.
    - Đăng nhập thất bại: Thông báo lỗi sai tên tài khoản hoặc mật khẩu tới người dùng ( hiển thị dialog thông báo).
- Tài khoản Superuser: Account: namvt11; Password:namvt11.
- Note: Trường hợp người dùng cố tình truy cập trang web khi không đủ quyền thì sẽ tiến hành điều hướng về trang xem phim và thông báo lỗi quyền truy cập cho người dùng.

### Logout
- Chức năng: Kết thúc phiên đăng nhập của người dùng.
- Yêu cầu: Đã đăng nhập hệ thống
- Mô tả: Đăng xuất tài khoản khỏi Ứng dụng: 
    - Xóa dữ liệu người dùng khỏi trình duyệt.
    - Điều hướng về trang đăng nhập.

### Management of movies
- Chức năng: Quản lý nguồn dữ liệu ( data of movie) - CRUD, Pagination, Search, Filter...
- Yều cầu: Đăng nhập hệ thống với quyền Admin.
- Mô tả: Sau khi đăng nhập với user có quyền admin có thể truy cập trang này đề config các thông số , data movie trên hệ thống.Sử dụng một số chức năng quản lý: 

### Play trailer movie
- Chức năng: Xem trailer.
- Yêu cầu : N/A.
- Mô tả: Trong quá trình duyệt web khi người dùng click button Play trong trang Detail movie thì sẽ tiến hành show popup chiếu video ngắn miêu tả bộ phim đã chọn.

### Display movies
- Chức năng: Hiển thị thông tin tổng quan về các bộ phim.
- Yêu cầu : N/A.
- Mô tả: 
    - Hiển thị thông tin ngắn gon về phim ( hình ảnh, đáng giá, năm sản xuất, chất lượng, thời lượng...)
    - Search and filter movies theo: Thể loại, top rated, top voted, lasted..
    - Pagination : Loading by scroll.
### Detail movie
- Chức năng: Hiển thị đầy đủ thông tin phim.
- Yêu cầu: N/A.
- Mô tả: Hiện thị đầy đủ thông tin phim bao gồm: 
    - Hình ảnh: Ảnh poster phim, danh sách tên và ảnh của diễn viên.
    - Đánh giá phim: Số điểm IDMB trên tổng  số lượt vote.
    - Các thông tin về: tên phim, Quốc gia, phân loại phim, chất lượng phim, thời lượng, năm ra mắt, tóm tắt nội dung, giá tiền.
    - Chức năng mua bán: Tích hợp button Buy Now (Thêm phim vào giỏ hành).
- Note: Khi thêm phim vào giỏ thì đồng thời sẽ hiển thị thông tin giỏ hàng tương ứng với phim đã chọn với số lượng là 1. Nếu click Buy 1 phim đã có trong danh sách giỏ hàng thì sẽ tự động cập nhật thêm 1 đơn vị vào bộ phim tương ứng trong giỏ hàng. 

### Manage cart
- Chức năng: Quản lý các sản phẩm (movie) đã thêm vào giỏ chờ thanh toán.
- Yêu cầu: N/A.
- Mô tả: 
    - Hiện thị và quản lý dữ liệu về sản phẩm mà người dùng đã chọn.
    - Tăng, giảm số lượng sản phẩm có trong giỏ hàng.
    - Xóa bỏ sản phẩm khỏi giỏ hàng.
    - Tự động tính số tiền dựa trên giá cả và số lượng sản phẩm đã chọn.
    - Di chuyển sang trang thanh toán.
- Note:  Để thuận tiện cho người dùng thì cạnh biểu tượng giỏ hàng trên thanh header có hiện thị số sản phẩm hiện đang có trong giỏ hàng.
### Buy and Payment
- Chức năng: Hiển thị chi tiết về thông tin đơn hàng và form nhập thông tin thanh toán
- Yêu cầu: Đã thêm sản phẩm vào giỏ hàng trước đó, yêu cẩu đăng nhập để tiến hành thanh toán và lưu thông tin đơn hàng.
- Mô tả: 
    - Hiên thị thông tin số lượng và giá đơn hàng cần thanh toán.
    - Option bổ sung thêm quà tặng, vouchers cho người dùng.
    - Cho phép người dùng bổ sung thông tin để tiến hành thanh toán và cung cấp thông tin phục vụ shipping.
## Getting Started

Provide instructions on how to set up and run your project locally.

## Installation

A step-by-step guide on how to install and set up your project.
1. **Install all dependencies run project:**
```
npm i
```

2. **Run mock data - Json server provide data for App:**
- Open bash GUI and Move to the folder containing the file db.json: [\src\utils\db.json]

```
json-server --watch db.json
```

3. **Run mock server  - Dùng để tự động gửi mail xác thực tới người dùng đăng ký mới tài khoản:**
- Move to the folder containing the file server.js : [\src\utils\server.js] and run command above

```
node server.js
```
4. **Run Web App**
- Starting web and enjoy this moment.
```
npm run dev
```