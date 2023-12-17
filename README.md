## SETUP MONGODB
- Bước 1: Mở cửa sổ Terminal trong Ubuntu
  - Mở ứng dụng Terminal trên Ubuntu để thực hiện các lệnh cài đặt.
- Bước 2: Cài đặt MongoDB

```bash
- Thêm kho lưu trữ MongoDB:
  sudo apt update
  sudo apt install -y gnupg
  wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -

- Thêm kho lưu trữ MongoDB vào danh sách nguồn cài đặt:
  echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

- Cập nhật gói phần mềm:
  sudo apt update

- Cài đặt MongoDB:
  sudo apt install -y mongodb-org

- Khởi động dịch vụ MongoDB:
  sudo service mongod start

- Kiểm tra trạng thái của MongoDB: Nếu MongoDB đã được cài đặt và chạy đúng, bạn sẽ thấy thông báo "active (running)" trong kết quả của lệnh trạng thái.
  sudo service mongod status

```
- Bước 3: Kết nối đến MongoDB từ môi trường phát triển
```bash
- Mở Terminal và kết nối đến MongoDB:
  mongo
  
- Kiểm tra phiên bản MongoDB:
  db.version()
```
## Setup Open PORT MONGODB
- Bước 1: Mở Cổng MongoDB trong Firewall (UFW)
```bash
- Kiểm tra trạng thái UFW:
  sudo ufw status
  
- Nếu UFW chưa được cài đặt, cài đặt nó:
  sudo apt install ufw
  
- Mở cổng 27017 (hoặc cổng mongod được cấu hình) trong UFW:
  sudo ufw allow 27017
  
- Kích hoạt UFW:
  sudo ufw enable

- Kiểm tra lại trạng thái UFW để đảm bảo rằng cổng 27017 đã được mở:
  sudo ufw status
```
- Bước 2: Thiết lập Bảo mật trong MongoDB
```bash
- Mở tệp cấu hình MongoDB:
  sudo nano /etc/mongod.conf
  
- Tìm đến phần security và thêm cấu hình bảo mật:
  security:
  authorization: enabled
  
- Khởi động lại MongoDB để áp dụng cấu hình mới:
  sudo service mongod restart
```
- Bước 3: Tạo Người Dùng và Phân Quyền trong MongoDB
```bash
- Kết nối vào MongoDB:
  mongo
  
- Chuyển đến cơ sở dữ liệu quản trị:
  use admin
  
- Tạo người dùng với quyền quản trị (root):
 db.createUser(
  {
    user: "adminUser",
    pwd: "yourAdminPassword",
    roles: [ { role: "root", db: "admin" } ]
  }
  )
- Thoát khỏi MongoDB:
  exit
```
- Bước 4: Kết nối MongoDB với Tên Người Dùng và Mật Khẩu
```bash
- Mở tệp cấu hình MongoDB:
  sudo nano /etc/mongod.conf
  
- Tìm đến phần security và thêm cấu hình bảo mật:
  security:
  authorization: enabled
  
- Khởi động lại MongoDB để áp dụng cấu hình mới:
  sudo service mongod restart
```
## SETUP EXPRESS TO GET API
1. Bước 1: Cài đặt Node.js và npm
- Mở Terminal và chạy các lệnh sau để cài đặt Node.js và npm:
```bash
sudo apt update
sudo apt install -y nodejs npm
```
- Kiểm tra phiên bản Node.js và npm:
```bash
sudo apt update
sudo apt install -y nodejs npm
```
2. Bước 2: Tạo SSL Key và Chứng chỉ tự ký
- Trên Ubuntu, bạn có thể cài đặt OpenSSL bằng lệnh:
```bash
sudo apt install openssl
```
- Tạo Private Key:
```bash
openssl genpkey -algorithm RSA -out private-key.pem
```
Lưu ý: Bạn có thể điều chỉnh độ dài của key bằng cách thêm -aes256 (hoặc độ dài khác) vào lệnh.
- Tạo Certificate Signing Request (CSR)::
```bash
openssl req -new -key private-key.pem -out csr.pem
Tạo Self-Signed Certificate từ CSR:
```
Trong quá trình tạo CSR, bạn sẽ được yêu cầu nhập một số thông tin như Tên ổ chứa (Common Name), tỉnh, quốc gia, v.v.
- Tạo Self-Signed Certificate từ CSR:
```bash
openssl x509 -req -days 365 -in csr.pem -signkey private-key.pem -out certificate.pem
Lưu ý: Điều này tạo ra một chứng chỉ có thời hạn là 365 ngày. Bạn có thể điều chỉnh số ngày bằng cách sửa giá trị của -days.
```
3. Bước 3: Sử dụng Key và Chứng chỉ trong ứng dụng Express
   Sử dụng private key (private-key.pem) và certificate (certificate.pem) trong mã ứng dụng Express, như đã mô tả trong ví dụ trong câu trả lời trước:
```nashorn js
const options = {
    key: fs.readFileSync('path/to/private-key.pem'),
    cert: fs.readFileSync('path/to/certificate.pem'),
};

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
});
```
Thay thế 'path/to/private-key.pem' và 'path/to/certificate.pem' bằng đường dẫn thực tế của key và chứng chỉ bạn vừa tạo.
4. Bước 4: Chạy ứng dụng Express với SSL
- Chạy lệnh sau để cài đặt một số gói cần thiết:
```bash
npm install
```
- Chạy ứng dụng Express:
```bash
node app.js
```
