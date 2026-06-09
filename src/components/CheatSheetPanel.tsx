/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CppCodeBlock from "./CppCodeBlock";
import { Book, Bookmark, Code, ShieldAlert, Cpu } from "lucide-react";

export default function CheatSheetPanel() {
  const codeTemplates = {
    encapsulation: `class BankAccount {
private:
    double balance; // Đóng gói ẩn thuộc tính

public:
    // Constructor khởi tạo
    BankAccount(double initBal) : balance(initBal) {}

    // Getter đọc an toàn
    double getBalance() const { return balance; }

    // Setter ghi tương tác có kiểm tra điều kiện bảo mật
    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
};`,
    inheritance: `class Animal {
protected:
    string name;
public:
    Animal(string n) : name(n) {}
    void breathe() { cout << name << " is breathing"; }
};

// Kế thừa public giữ nguyên thuộc tính public và protected
class Dog : public Animal {
private:
    string breed;
public:
    Dog(string n, string b) : Animal(n), breed(b) {}
    void bark() { cout << name << " barks!"; }
};`,
    polymorphism: `class Employee {
public:
    // Hàm ảo cho phép liên kết muộn (Đa hình động)
    virtual double calcSalary() { return 1000.0; }
    
    // Hàm hủy ảo (Virtual Destructor) bắt buộc có để lớp con không giải phóng thiếu
    virtual ~Employee() {} 
};

class Developer : public Employee {
public:
    double calcSalary() override { // Từ khóa override tường minh
        return 2000.0; 
    }
};`,
    abstraction: `// Lớp trừu tượng do chứa phương thức thuần ảo = 0
class Shape {
public:
    virtual double getArea() = 0; // Pure virtual function
    virtual void draw() = 0;
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double getArea() override { return 3.14 * radius * radius; }
    void draw() override { cout << "Draw circle"; }
};`
  };

  return (
    <div className="space-y-6 max-h-[800px] overflow-y-auto pr-2">
      
      {/* Intro block */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h2 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-2">
          <Book className="w-5 h-5 text-sky-600" />
          Sổ Tay Lý Thuyết & Cú Pháp Chuẩn C++ OOP
        </h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          Tóm lược 4 cột mốc nền móng cốt lõi của môn Lập trình Hướng đối tượng (LTHDT - Object Oriented Programming) được thiết kế cho sinh viên ôn luyện, nắm giữ toàn bộ lý thuyết cú pháp C++.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Pillar 1: Encapsulation */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-slate-800 font-bold text-sm">
            <span className="w-6 h-6 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-mono">1</span>
            <h3>Tính Đóng Gói (Encapsulation)</h3>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Là tiến trình che giấu thông tin chi tiết kỹ thuật lắp ráp của lớp, giới hạn truy xuất bừa bãi bằng các phạm vi để dữ liệu đối tượng tránh bị tác động sai phạm lệch lạc trạng thái.
          </p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/50 text-[11px] space-y-1.5 text-slate-600">
            <p><strong>• public:</strong> Thành viên có quyền gọi tự do từ ngoài lớp.</p>
            <p><strong>• private (Mặc định):</strong> Chỉ nội bộ bên trong lớp mới có quyền đọc ghi.</p>
            <p><strong>• protected:</strong> Bản thân lớp và những lớp con kế thừa được gọi trực tiếp.</p>
          </div>
          <CppCodeBlock code={codeTemplates.encapsulation} />
        </div>

        {/* Pillar 2: Inheritance */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-slate-800 font-bold text-sm">
            <span className="w-6 h-6 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-mono">2</span>
            <h3>Tính Kế Thừa (Inheritance)</h3>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Cho phép lớp con tái chế lắp ghép các thuộc tính, phương thức của cha mà không cần biên soạn lại mã trùng lặp. Đặc biệt trong C++ có đa kế thừa, cần chú ý hiện tượng Diamond.
          </p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/50 text-[11px] space-y-1.5 text-slate-600">
            <p><strong>• Thứ tự Constructor:</strong> Cha chạy trước rồi mới tới Con chạy.</p>
            <p><strong>• Thứ tự Destructor:</strong> Con hủy trước tự thu hồi rồi mới trả cho Cha.</p>
            <p><strong>• Kế thừa ảo (virtual inheritance):</strong> Loại bỏ sự nhập nhằng đa nghĩa lớp kim cương.</p>
          </div>
          <CppCodeBlock code={codeTemplates.inheritance} />
        </div>

        {/* Pillar 3: Polymorphism */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-slate-800 font-bold text-sm">
            <span className="w-6 h-6 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-mono">3</span>
            <h3>Tính Đa Hình (Polymorphism)</h3>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Cho phép một phương thức hiển thị nhiều hành xử thực tế tùy thuộc vào đối tượng thực tiễn gọi nó tại runtime. Đạt được nhờ việc sử dụng cơ chế Hàm ảo liên kết muộn.
          </p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/50 text-[11px] space-y-1.5 text-slate-600">
            <p><strong>• virtual:</strong> Kích hoạt liên kết muộn (dynamic/late binding).</p>
            <p><strong>• override:</strong> Chỉ thị tường minh việc con định nghĩa lại hàm cha ảo.</p>
            <p><strong>• Virtual Destructor:</strong> Buộc lớp cha ảo phải có hàm hủy ảo để dọn RAM an toàn.</p>
          </div>
          <CppCodeBlock code={codeTemplates.polymorphism} />
        </div>

        {/* Pillar 4: Abstraction */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-slate-800 font-bold text-sm">
            <span className="w-6 h-6 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-mono">4</span>
            <h3>Tính Trừu Tượng (Abstraction)</h3>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed">
            Tập trung rút trích những thuộc tính và hành vi mấu chốt, lập kế hoạch khai báo mà bỏ qua chi tiết lắp đặt cụ thể dưới dạng các giao diện (interface) hoặc lớp cơ sở ảo trừu tượng.
          </p>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/50 text-[11px] space-y-1.5 text-slate-600">
            <p><strong>• Hàm thuần ảo (= 0):</strong> Không có nội dung định nghĩa tại lớp cha.</p>
            <p><strong>• Lớp trừu tượng:</strong> Không thể tự tạo đối tượng (ví dụ: \`Shape s;\` sẽ lỗi compile).</p>
            <p><strong>• Giao thức kế thừa:</strong> Bắt buộc con dẫn xuất phải override đủ hàm thuần ảo.</p>
          </div>
          <CppCodeBlock code={codeTemplates.abstraction} />
        </div>

      </div>

      {/* Warning notes */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-4 text-xs text-amber-800">
        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold mb-1">Mẹo nhỏ quan trọng khi thi trắc nghiệm LTHDT:</h4>
          <p className="leading-relaxed">
            Hãy chú ý các câu hỏi gài về <strong>Dấu chấm phẩy (;) cuối phần khai báo class</strong>, việc truy cập thành viên <strong>private của lớp cha</strong>, và sự khác biệt về liên kết sớm khi sử dụng con trỏ kiểu cha gọi phương thức không có từ khóa <strong>virtual</strong>. Chúc các bạn sinh viên đạt kết quả cao nhất!
          </p>
        </div>
      </div>

    </div>
  );
}
