/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Question } from "../types";

export const BATCH10_QUESTIONS: Question[] = [
  {
    id: "q226",
    category: Category.BASICS,
    questionText:
      "Trong các đặc tính về thành phần tĩnh (static member/static method) của một lớp được nêu ở slide chương 2, phát biểu nào sau đây là KHÔNG chính xác?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Hàm khai báo static thuộc về lớp chứ dứt khoát không thuộc về bất kỳ đối tượng cụ thể nào.",
      },
      {
        key: "B",
        text: "Hàm thành phần tĩnh chỉ có thể truy nhập tới những thành phần tĩnh khác nằm trong lớp.",
      },
      {
        key: "C",
        text: "Hàm thành phần tĩnh của lớp hoàn toàn có quyền sử dụng trực tiếp con trỏ 'this'.",
      },
      {
        key: "D",
        text: "Gọi hàm tĩnh static thông qua tên lớp mà hoàn toàn không cần thiết phải khởi tạo đối tượng trước đó.",
      },
    ],
    correctAnswer: "C",
    explanation:
      "Đúng theo slide phân tích: 'Hàm thành phần tĩnh (static method) thuộc về lớp, không thuộc về đối tượng cụ thể nào, gọi không cần tạo object'. Vì không đại diện cho bất kỳ đối tượng cụ thể nào, hàm tĩnh static dứt khoát KHÔNG thể có con trỏ 'this' nội bộ.",
    difficulty: "Trung bình",
  },
  {
    id: "q227",
    category: Category.BASICS,
    questionText:
      "Để gọi thực hiện một hàm thành phần tĩnh (static method) ngoài hàm main chuẩn chỉnh mà không cần tạo bất kỳ đối tượng cụ thể nào, ta áp dụng cú pháp nào sau đây?",
    codeSnippet: `class SinhVien {
public:
    static int laySoLuong();
};`,
    options: [
      { key: "A", text: "SinhVien->laySoLuong();" },
      { key: "B", text: "SinhVien::laySoLuong();" },
      { key: "C", text: "SinhVien.laySoLuong();" },
      { key: "D", text: "*SinhVien.laySoLuong();" },
    ],
    correctAnswer: "B",
    explanation:
      "Vì hàm tĩnh thuộc trực tiếp về phạm vi của Lớp chung, cú pháp phân giải tầm vực `::` (Scope resolution operator) bắt buộc phải dùng để gọi hàm trực tiếp từ tên Lớp: `SinhVien::laySoLuong();`.",
    difficulty: "Dễ",
  },
  {
    id: "q228",
    category: Category.BASICS,
    questionText:
      "Tại sao trình biên dịch trong C++ dứt khoát ngăn cấm việc khởi tạo giá trị ban đầu cho các biến thành viên tĩnh (static variables) trực tiếp ngay bên trong phần khai báo class?",
    codeSnippet: `class SinhVien {
    static int dem = 0; // Lỗi biên dịch xảy ra!
};`,
    options: [
      {
        key: "A",
        text: "Vì các thuộc tính tĩnh bắt buộc phải có giá trị mặc định luôn là phân số 0/0.",
      },
      {
        key: "B",
        text: "Vì biến tĩnh không thuộc về đối tượng đơn lẻ mà chia sẻ toàn cục của lớp. Việc khai báo khởi tạo trực tiếp trong cấu trúc class sẽ khiến nó bị gán đè lặp đi lặp lại lỗi tranh chấp, nó phải được định nghĩa đặt ngoài class.",
      },
      {
        key: "C",
        text: "Vì mọi biến tĩnh bắt buộc phải nạp mặc định từ tệp tin cơ sở dữ liệu.",
      },
      {
        key: "D",
        text: "Vì C++ ngăn cấm hoàn toàn kiểu dữ liệu int làm biến tĩnh.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Slide ghi chú rõ rệt: 'Không khởi tạo biến tĩnh trực tiếp trong lớp'. Biến tĩnh thực tế là biến chia sẻ duy nhất toàn cụm của lớp cho mọi đối tượng. Thế nên việc định nghĩa cấp phát ô nhớ thực thụ và khởi gán giá trị của nó bắt buộc phải được đặt ở ngoài tệp mã nguồn (.cpp) đại diện tầm vực như `int SinhVien::dem = 0;`.",
    difficulty: "Khó",
  },
  {
    id: "q229",
    category: Category.BASICS,
    questionText:
      "Dựa vào đoạn mã nguồn mô phỏng ví dụ ở slide 19/PDF 2, lớp SinhVien sử dụng một biến đếm tĩnh. Có phương thức tăng biến đếm trong hàm tạo. Khi ta khai báo tạo 3 đối tượng sinh viên An, Bình, Cường trong hàm main, thì kết quả hiển số lượng sinh viên thu được là bao nhiêu?",
    codeSnippet: `int main() {
    SinhVien an("An"), binh("Binh"), cuong("Cuong");
    cout << SinhVien::laySoLuong();
}`,
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "3" },
      { key: "C", text: "Mỗi sinh viên một giá trị riêng rẽ độc lập bằng 1." },
      { key: "D", text: "Chương trình báo lỗi và không xuất ra số nào cả." },
    ],
    correctAnswer: "B",
    explanation:
      "Vì biến đếm tĩnh dùng chung cho toàn bộ các sinh viên. Mỗi khi một sinh viên được tạo ra bằng Constructor, biến đếm tĩnh này được cộng tăng thêm 1 đơn vị liên tiếp. Khai báo 3 sinh viên An, Bình, Cường kích hoạt 3 lần hàm tạo, biến tĩnh từ 0 tăng lên 3.",
    difficulty: "Dễ",
  },
  {
    id: "q230",
    category: Category.ADVANCED,
    questionText:
      "Trong C++, một 'Hàm bạn' (Friend function) của một lớp nhận được đặc quyền nào sau đây?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Được tự động gán nhãn virtual ảo và thừa kế xuống mọi lớp dẫn xuất.",
      },
      {
        key: "B",
        text: "Có toàn quyền truy cập đến tất cả các thành viên bao gồm cả các thuộc tính và phương thức thuộc miền bảo mật 'private' và 'protected' của lớp đó.",
      },
      {
        key: "C",
        text: "Cấm các hàm thành viên thông thường sử dụng tài nguyên của lớp.",
      },
      { key: "D", text: "Tự động đổi tên trùng với tên file cpp nhị phân." },
    ],
    correctAnswer: "B",
    explanation:
      "Định nghĩa chuẩn của friend: 'Hàm friend là hàm được định nghĩa cho phép nhiều lớp cùng sử dụng chung. Có quyền truy cập đến các thành viên private và protected của lớp' (Slide 20/PDF 2).",
    difficulty: "Dễ",
  },
  {
    id: "q231",
    category: Category.ADVANCED,
    questionText:
      "Cú pháp khai báo một 'Hàm bạn' (Friend function) chuẩn chỉnh bên trong phần thân của Class được quy định như thế nào?",
    codeSnippet: "",
    options: [
      { key: "A", text: "type tên-hàm( parameter ) friend;" },
      { key: "B", text: "friend type tên-hàm( parameter );" },
      { key: "C", text: "public friend type tên-hàm();" },
      { key: "D", text: "class friend type tên-hàm( parameter );" },
    ],
    correctAnswer: "B",
    explanation:
      "Slide chương 2 quy định cú pháp khai báo hàm bạn bên trong cơ cấu định nghĩa lớp: 'friend type tên-hàm( parameter );'. Ví dụ: `friend PhanSo Nhan(PhanSo a, PhanSo b);`.",
    difficulty: "Dễ",
  },
  {
    id: "q232",
    category: Category.ADVANCED,
    questionText:
      "Đâu là điểm khác biệt cốt lõi về miền khai báo và cách định nghĩa của 'Hàm bạn' so với các phương thức thành viên (Member function) thông thường của lớp?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Hàm bạn luôn bắt buộc phải viết code định nghĩa trực tiếp bên trong vùng public của class.",
      },
      {
        key: "B",
        text: "Hàm bạn không nằm trong tầm vực (scope) của lớp, định nghĩa của nó hoàn toàn như một hàm tự do thông thường ở mọi nơi và không dùng toán tử phạm vi '::' của lớp.",
      },
      {
        key: "C",
        text: "Hàm bạn chỉ được phép gọi gián tiếp thông qua con trỏ void*.",
      },
      {
        key: "D",
        text: "Hàm bạn chỉ cho phép nhận duy nhất 1 tham biến kiểu tĩnh static.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Slide hướng dẫn: 'Hàm friend có thể định nghĩa ở mọi nơi và không cần dùng từ khóa friend hay toán tử ::. Hàm friends là một hàm được định nghĩa thông thường. Không nằm trong miền xác định của lớp nơi được khai báo. Khi truy cập đến hàm không cần gắn với đối tượng của lớp' (Slide 21/PDF 2).",
    difficulty: "Trung bình",
  },
  {
    id: "q233",
    category: Category.ADVANCED,
    questionText:
      "Một 'Hàm bạn' (Friend function) có thể sử dụng con trỏ ngầm định 'this' của lớp để thay đổi giá trị thuộc tính trực tiếp hay không?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Hoàn toàn có thể, con trỏ 'this' là mặc định của mọi hàm liên đới lớp.",
      },
      {
        key: "B",
        text: "Không thể, hàm bạn không sử dụng con trỏ 'this'. Để thao tác dữ liệu của đối tượng, thông thường đối số của hàm bạn phải truyền tường minh các đối tượng cần tương tác.",
      },
      {
        key: "C",
        text: "Chỉ được dùng con trỏ 'this' khi đối số của hàm không chứa hằng tham chiếu const.",
      },
      {
        key: "D",
        text: "Hàm bạn được tự do chuyển đối sang dùng con trỏ 'self' thay thế cho 'this'.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Đúng theo slide lưu ý rõ: 'Hàm friend không sử dụng con trỏ 'this'. Thông thường đối số của các hàm friend là các đối tượng đang định nghĩa'. Vì hàm bạn thực tế là hàm tự do bên ngoài, nó không có đối tượng gọi ngầm định nào để định danh con trỏ `this` nội bộ.",
    difficulty: "Trung bình",
  },
  {
    id: "q234",
    category: Category.INHERITANCE,
    questionText:
      "Trong bài học thiết kế mô hình hóa OOP về Tính kế thừa (Slide 8/PDF 4), hai cách tiếp cận cơ bản được trình bày bao gồm phương thức nào?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Kế thừa trực tiếp và kế thừa gián tiếp thông qua file header .h",
      },
      {
        key: "B",
        text: "Kế thừa một cấp (Top-level) và nạp chồng (Overloaded-level) đa luồng.",
      },
      {
        key: "C",
        text: "Top-down (bắt đầu từ lớp cha tổng quan phân rã ra lớp con cụ thể) và Bottom-up (tìm các con có chung thuộc tính hành vi rồi gom nhóm lại thành lớp cha).",
      },
      { key: "D", text: "Static-inheritance và Dynamic-inheritance." },
    ],
    correctAnswer: "C",
    explanation:
      "Slide bám sát định nghĩa hai cách tiếp cận: 'Top-down: Bắt đầu từ một đối tượng tổng quan (lớp cha), sau đó phân rã ra các đối tượng con (lớp con). Bottom-up: Tìm các đối tượng con có thuộc tính và hành vi giống nhau, sau đó gom lại thành một đối tượng cha (lớp cha)'.",
    difficulty: "Trung bình",
  },
  {
    id: "q235",
    category: Category.INHERITANCE,
    questionText:
      "Định nghĩa chuẩn xác nhất về 'Đơn kế thừa' (Single Inheritance) và 'Đa kế thừa' (Multiple Inheritance) trong cấu trúc lập trình C++?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Đơn kế thừa là lớp con chỉ được override 1 phương thức ảo; Đa kế thừa là lớp con được phép override nhiều phương thức ảo từ lớp cha.",
      },
      {
        key: "B",
        text: "Đơn kế thừa là một lớp con chỉ kế thừa từ một lớp cha duy nhất; Đa kế thừa là một lớp con có thể kế thừa từ nhiều lớp cha khác nhau cùng lúc.",
      },
      {
        key: "C",
        text: "Đơn kế thừa chỉ tồn tại ở ngôn ngữ Java; Đa kế thừa chỉ áp dụng khi viết mã nguồn bằng Python và C.",
      },
      {
        key: "D",
        text: "Đơn kế thừa chỉ sao chép một nửa số thuộc tính; Đa kế thừa sao chép tất cả thuộc tính gộp cả của hằng số hệ thống.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Định nghĩa gốc của slide: 'Đơn kế thừa (Single Inheritance): Một lớp con kế thừa từ một lớp cha duy nhất. Đa kế thừa (Multiple Inheritance): Một lớp con có thể kế thừa từ nhiều lớp cha'. Ví dụ: lớp Magazine kế thừa từ Book và Publisher.",
    difficulty: "Dễ",
  },
  {
    id: "q236",
    category: Category.INHERITANCE,
    questionText:
      "Từ khóa nào trong cấu trúc cú pháp của C++ được dùng trước tên lớp cha để chỉ định sự kế thừa tường minh (khác biệt với các ngôn ngữ như Java sử dụng từ khóaextends)?",
    codeSnippet: `class Dog : ___ Animal {
    // Dog kế thừa public từ Animal
};`,
    options: [
      { key: "A", text: "inherits" },
      { key: "B", text: "extends" },
      { key: "C", text: "public / protected / private" },
      { key: "D", text: "virtual" },
    ],
    correctAnswer: "C",
    explanation:
      "Trắc nghiệm slide 26/PDF 4 hỏi: 'Từ khóa nào trong C++ dùng để chỉ ra một lớp kế thừa từ lớp khác?' Đáp án đúng là `public` (hoặc chỉ thị phạm vi truy cập: public / protected / private). Khác với Java sử dụng `extends`.",
    difficulty: "Dễ",
  },
  {
    id: "q237",
    category: Category.INHERITANCE,
    questionText:
      "Dựa vào đoạn mã nguồn ví dụ ở slide 23/PDF 4, hãy cho biết cú pháp khai báo chính xác đối với lớp Magazine thực hiện kế thừa public đồng thời từ cả hai lớp cha Book và Publisher?",
    codeSnippet: "",
    options: [
      { key: "A", text: "class Magazine : public Book & public Publisher" },
      { key: "B", text: "class Magazine : public Book, public Publisher" },
      { key: "C", text: "class Magazine inherits Book, Publisher" },
      { key: "D", text: "class Magazine : public (Book, Publisher)" },
    ],
    correctAnswer: "B",
    explanation:
      "Trong cơ chế đa kế thừa của C++, ta khai báo danh sách các lớp cha phân cách nhau bởi dấu phẩy, đi kèm phạm vi kế thừa trước mỗi lớp: `class Magazine : public Book, public Publisher`.",
    difficulty: "Trung bình",
  },
  {
    id: "q238",
    category: Category.INHERITANCE,
    questionText:
      "Trong lược vẽ sơ đồ thực thể UML của lớp Book (Slide 30/PDF 4), các ký hiệu dấu trừ '-' và dấu cộng '+' đặt ở đầu các thuộc tính và phương thức thể hiện đặc điểm bảo mật (access modifier) nào tương ứng?",
    codeSnippet: `-title: string
+borrow(): bool`,
    options: [
      { key: "A", text: "Dấu '-' là protected và '+' là public." },
      { key: "B", text: "Dấu '-' là private và '+' là public." },
      {
        key: "C",
        text: "Dấu '-' là hằng số const và '+' là mảng tĩnh static.",
      },
      {
        key: "D",
        text: "Dấu '-' là lớp nội bộ ẩn và '+' là hàm ghi đè override.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Theo chuẩn đặc tả sơ đồ Class Diagram UML: Dấu trừ `-` thể hiện đặc điểm truy cập `private` (bảo mật tối đa, chỉ nội bộ lớp truy cập) và dấu cộng `+` đại diện phạm vi `public` (công khai, cho phép gọi tự do từ bên ngoài).",
    difficulty: "Dễ",
  },
  {
    id: "q239",
    category: Category.POLYMORPHISM,
    questionText:
      "Theo tài liệu bài học, 'Tính đa hình' (Polymorphism) trong lập trình OOP được định nghĩa là khả năng gì?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Khả năng nhân bản vùng nhớ RAM để chạy nhiều đối tượng song song nhau.",
      },
      {
        key: "B",
        text: "Khả năng của một phương thức có thể thực hiện nhiều hành động khác nhau tùy thuộc vào đối tượng gọi phương thức đó.",
      },
      {
        key: "C",
        text: "Khả năng bảo vệ dữ liệu chống lại sự xâm nhập trái phép của người dùng bên ngoài.",
      },
      {
        key: "D",
        text: "Khả năng tự động nén dung lượng mã nguồn khi gặp tệp nhị phân lớn.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Định nghĩa chính gốc của tính đa hình trong slide: 'Khái niệm: Tính đa hình (Polymorphism) là khả năng của một phương thức có thể thực hiện nhiều hành động khác nhau tùy thuộc vào đối tượng gọi phương thức đó' (Slide 32/PDF 4).",
    difficulty: "Dễ",
  },
  {
    id: "q240",
    category: Category.POLYMORPHISM,
    questionText:
      "Kỹ thuật 'Method Overriding' (Ghi đè phương thức) đại diện cho tính đa hình động và được kích hoạt dựa trên nguyên lý hoạt động nào?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Định nghĩa nhiều phương thức cùng tên nhưng có tham số hoàn toàn khác nhau trong cùng một lớp.",
      },
      {
        key: "B",
        text: "Cho phép lớp con cung cấp triển khai cụ thể cho một phương thức ảo đã được định nghĩa sẵn trong lớp cha.",
      },
      {
        key: "C",
        text: "Sử dụng các toán tử gán sao chép để tự động hủy lớp dẫn xuất.",
      },
      {
        key: "D",
        text: "Ủy quyền việc nạp chồng lớp cho các biên dịch viên Java.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Ghi đè phương thức (Method Overriding) yêu cầu lớp con định nghĩa lại chính xác chữ ký phương thức ảo `virtual` thuộc lớp cha nhằm cung cấp xử lý riêng chuyên biệt cho đối tượng con. Đây là cơ sở cốt lõi của đa hình tại thời điểm runtime.",
    difficulty: "Dễ",
  },
  {
    id: "q241",
    category: Category.POLYMORPHISM,
    questionText:
      "Kỹ thuật 'Method Overloading' (Nạp chồng phương thức) đại diện cho tính đa hình tĩnh tại compile-time và hoạt động theo nguyên lý nào?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Cho phép một lớp có nhiều phương thức cùng tên nhưng khác nhau hoàn toàn về danh sách tham số (số lượng, kiểu dữ liệu).",
      },
      {
        key: "B",
        text: "Cho phép lớp con thay đổi hoàn toàn mã nguồn của lớp cha mà không cần kế thừa.",
      },
      {
        key: "C",
        text: "Việc khai sinh ra một destructor ảo thuần túy cho lớp cơ sở.",
      },
      {
        key: "D",
        text: "Đòi hỏi một phương thức bắt buộc phải có từ khóa virtual ở cả lớp cha lẫn con.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Nạp chồng phương thức (Method Overloading) cho phép tạo ra nhiều phiên bản hàm trùng tên nhau trong cùng một tầm vực lớp, nhưng trình biên dịch sẽ phân biệt chúng nhờ sự khác biệt của chữ ký danh sách tham số truyền vào: 'Cho phép một lớp có nhiều phương thức cùng tên nhưng khác nhau về tham số' (Slide 36/PDF 4).",
    difficulty: "Dễ",
  },
  {
    id: "q242",
    category: Category.POLYMORPHISM,
    questionText:
      "Hãy xem xét đoạn mã nguồn minh họa ở slide 38/PDF 4. Biến myDog và myCat là con trỏ kiểu lớp cha Animal trỏ tới đối tượng lớp con Dog và Cat. Đoạn chương trình in ra kết quả như thế nào nhờ cơ chế Đa Hình Động?",
    codeSnippet: `Animal* myDog = new Dog();
Animal* myCat = new Cat();
myDog->makeSound(); // Outputs?
myCat->makeSound(); // Outputs?`,
    options: [
      { key: "A", text: "Animal sound\\nAnimal sound" },
      { key: "B", text: "Bark\\nMeow" },
      { key: "C", text: "Dog\\nCat" },
      { key: "D", text: "Meow\\nBark" },
    ],
    correctAnswer: "B",
    explanation:
      "Mặc dù myDog và myCat khai báo kiểu con trỏ `Animal*` (Upcasting), nhưng do hàm `makeSound()` được khai báo là hàm ảo `virtual` ở lớp cha và được ghi đè (`override`) ở các lớp con. Nên tại thời điểm chạy (runtime), chương trình tự động phân giải bám sát kiểu thực thể của đối tượng nó trỏ tới, in ra của lớp con tương ứng là 'Bark' và 'Meow'.",
    difficulty: "Trung bình",
  },
  {
    id: "q243",
    category: Category.OPERATORS,
    questionText:
      "Hàm chồng toán tử (operator overloading) mang lại ý nghĩa và lợi ích to lớn nhất là gì cho lập trình viên ứng dụng?",
    codeSnippet: "",
    options: [
      {
        key: "A",
        text: "Tăng năng suất nén mã nhị phân khi liên kết thư viện động dll.",
      },
      {
        key: "B",
        text: "Cho phép định nghĩa lại cách các toán tử cơ bản (như +, -, *, ==, v.v.) hoạt động đối với các đối tượng lớp tự định nghĩa, giúp mã nguồn trở nên cực kỳ trực quan và tự nhiên.",
      },
      {
        key: "C",
        text: "Tự động thiết lập vùng nhớ Heap tĩnh để bảo quản con trỏ.",
      },
      {
        key: "D",
        text: "Tối ưu hóa các lớp đa kế thừa để không cần khai báo file destructor.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Hàm chồng toán tử hỗ trợ lập trình viên viết các phép toán trực tiếp trên lớp tự tạo (như `p1 + p2` thay vì `p1.add(p2)` hoặc `p1.cong(p2)`), giúp mã nguồn clean, dễ đọc và mô tả nghiệp vụ tốt như kiểu cơ sở sẵn có.",
    difficulty: "Dễ",
  },
  {
    id: "q244",
    category: Category.OPERATORS,
    questionText:
      "Trong C++, ngôn ngữ đặt ra giới hạn khắt khe khi ngăn cấm tuyệt đối nạp chồng đối với một số nhóm toán tử đặc biệt. Nhóm toán tử nào sau đây thuộc danh sách KHÔNG THỂ nạp chồng?",
    codeSnippet: "",
    options: [
      { key: "A", text: "+, -, *, /, %" },
      { key: "B", text: "==, !=, <, >, <<, >>" },
      { key: "C", text: "::, ., .*, ?: , sizeof, typeid" },
      { key: "D", text: "[], (), new, delete" },
    ],
    correctAnswer: "C",
    explanation:
      "C++ nghiêm cấm nạp chồng đối với các toán tử: toán tử phân giải phạm vi `::`, toán tử chấm `.` truy xuất thành viên, toán tử lấy thành viên qua con trỏ `.*`, toán tử điều kiện ba ngôi `?:`, toán tử đo kích thước `sizeof` và toán tử định danh kiểu `typeid` nhằm bảo toàn cú pháp nguyên văn của ngôn ngữ.",
    difficulty: "Trung bình",
  },
  {
    id: "q245",
    category: Category.OPERATORS,
    questionText:
      "Khi tiến hành nạp chồng một toán tử hai ngôi bằng một 'Hàm thành viên' (Member function) phi tĩnh của một lớp C++, số lượng tham số tường minh cần khai báo trong dấu ngoặc đơn của hàm là bao nhiêu?",
    codeSnippet: `class Fraction {
public:
    Fraction operator+(const Fraction& f); // Thao tác nhận tham số thế nào?
};`,
    options: [
      {
        key: "A",
        text: "Nhận đúng 2 tham số tường minh đại diện cho hai vế của phép cộng.",
      },
      {
        key: "B",
        text: "Nhận 1 tham số tường minh, vì toán hạng bên trái đóng vai trò là chính đối tượng gọi hàm (trỏ bởi con trỏ 'this' ngầm định).",
      },
      { key: "C", text: "Hoàn toàn không cần nhận tham số nào." },
      {
        key: "D",
        text: "Nhận vô hạn tham biến tùy thuộc trình biên dịch cài đặt.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "Đối với hàm thành viên nạp chồng toán tử hai ngôi, vế bên trái của toán tử sẽ kích hoạt lời gọi hàm (và được ngầm định trỏ bởi `this`). Vế bên phải của toán tử chính là tham số tường minh duy nhất được truyền vào signature trong khai báo hàm.",
    difficulty: "Khó",
  },
  {
    id: "q246",
    category: Category.OPERATORS,
    questionText:
      "Tại sao việc nạp chồng các toán tử nhập xuất dữ liệu dòng lệnh (nghĩa là toán tử >> và <<) dứt khoát phải được thiết lập bằng 'Hàm bạn' (Friend function) thay vì hàm thành viên của lớp?",
    codeSnippet: `friend ostream& operator<<(ostream& out, const phanso a);`,
    options: [
      {
        key: "A",
        text: "Vì các toán tử này chỉ hoạt động an toàn kể từ khi C++ nâng cấp thuật toán vtable.",
      },
      {
        key: "B",
        text: "Vì toán hạng (vế) phía bên trái của luồng nhập xuất bắt buộc phải là đối tượng 'istream' hoặc 'ostream', không phải đối tượng của lớp tự định nghĩa, do đó hàm không thể là thành viên của lớp đó.",
      },
      {
        key: "C",
        text: "Vì hàm bạn chạy nhanh hơn và có quyền thao túng RAM hệ thống tùy ý.",
      },
      { key: "D", text: "Vì luồng ostream ngăn cấm việc dùng hàm phi bạn." },
    ],
    correctAnswer: "B",
    explanation:
      "Toán tử gán luồng đầu ra có dạng `cout << obj;` tức là đối tượng ostream `cout` đứng bên trái toán tử, còn đối tượng `obj` của lớp ở bên phải. Do đối tượng bên trái cẩm nắm trọng trách kích hoạt gọi hàm thành viên, chúng ta không thể chỉnh sửa lớp `std::ostream` mặc định để thêm hàm, buộc phải dùng hàm bạn (friend function) để truyền cả 2 bên làm đối số tự do.",
    difficulty: "Khó",
  },
  {
    id: "q247",
    category: Category.OPERATORS,
    questionText:
      "Theo hướng dẫn bài học ở slide 38-39/PDF 2, toán tử chuyển đổi kiểu (Type Conversion Operator) dùng để chuyển một đối tượng của lớp thành một kiểu dữ liệu khác có cú pháp chung và quy tắc đặc biệt nào?",
    codeSnippet: `class Date {
public:
    operator int(); // Phép chuyển đổi kiểu Date về int
};`,
    options: [
      {
        key: "A",
        text: "Bắt buộc phải là hàm thành viên không tĩnh, không nhận tham số đầu vào và Tuyệt đối không ghi kiểu trả về ở khai báo đầu hàm.",
      },
      { key: "B", text: "Phải làm hàm bạn friend và trả về kiểu dữ liệu int." },
      {
        key: "C",
        text: "Được phép khai báo có từ khóa static và nhận tham số lồng vào.",
      },
      {
        key: "D",
        text: "Khai báo giống như một constructor mặc định có tiền tố dấu ngã ~.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Đúng theo slide quy chuẩn hóa: 'Hàm chuyển đổi kiểu phải là hàm thành viên không tĩnh và không phải hàm bạn (friend)'. Cú pháp: `operator <kiểu-cần-chuyển>();` và do kiểu đích đã nằm ngay sau chữ 'operator', ta dứt khoát không viết kiểu trả về phía đầu hàm nữa.",
    difficulty: "Khó",
  },
  {
    id: "q248",
    category: Category.ADVANCED,
    questionText:
      "Trong C++, khái niệm 'Giao tiếp lập trình' (Interface) được định nghĩa và biểu diễn theo cơ chế kỹ thuật lớp cụ thể nào?",
    codeSnippet: `class IShape {
public:
    virtual double area() const = 0; // Đây là kỹ thuật gì?
};`,
    options: [
      { key: "A", text: "Là lớp kế thừa trực tiếp từ lớp nhị phân hệ thống." },
      {
        key: "B",
        text: "Một lớp ảo trừu tượng thuần túy (pure abstract class), nghĩa là chỉ định ra các phương thức ảo thuần túy (virtual function = 0) và không chứa dữ liệu thuộc tính hay phần triển khai nội dung.",
      },
      {
        key: "C",
        text: "Một class khai báo toàn bộ các thuộc tính là hằng số const tĩnh.",
      },
      {
        key: "D",
        text: "Dạng class đặc biệt kế thừa song song nhiều file template.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "C++ không hỗ trợ từ khóa `interface` như Java hay C#. Thay vào đó, C++ biểu diễn Interface thông qua một lớp trừu tượng thuần túy: 'Một lớp giao tiếp không chứa dữ liệu hoặc phương thức thực thi mà chỉ có các phương thức ảo thuần túy (= 0;)' (Slide 5-9/PDF 5).",
    difficulty: "Trung bình",
  },
  {
    id: "q249",
    category: Category.ADVANCED,
    questionText:
      "Để xây dựng các lớp hoặc hàm tổng quát (Generic) độc lập hoàn toàn với các kiểu dữ liệu thực tế cụ thể trong C++, lập trình viên sẽ nhờ cậy tới công cụ kỹ thuật cực kỳ mạnh mẽ nào của ngôn ngữ?",
    codeSnippet: "",
    options: [
      { key: "A", text: "Cơ chế con trỏ rác Garbage Collector." },
      { key: "B", text: "Sử dụng các lớp static chứa toán tử mảng tinh gọn." },
      {
        key: "C",
        text: "Cơ chế khuôn mẫu 'Template' (bằng cách sử dụng từ khóa template).",
      },
      { key: "D", text: "Liên kết chéo file headers .h với file makefile." },
    ],
    correctAnswer: "C",
    explanation:
      "Giáo trình nêu rõ: 'C++ sử dụng template để tạo ra các lớp và hàm generic. Lợi ích: Viết mã một lần và áp dụng cho nhiều kiểu dữ liệu khác nhau' (Slide 7/PDF 5).",
    difficulty: "Dễ",
  },
  {
    id: "q250",
    category: Category.ADVANCED,
    questionText:
      "Dựa vào đoạn mã nguồn về template hàm 'add' ở slide 12/PDF 5, hãy cho biết từ khóa nào được thiết lập trước danh sách tham số để biểu diễn tên của kiểu dữ liệu tổng quát?",
    codeSnippet: `template <_____ T>
T add(T a, T b) {
    return a + b;
}`,
    options: [
      { key: "A", text: "generic" },
      { key: "B", text: "typename hoặc class" },
      { key: "C", text: "define" },
      { key: "D", text: "auto" },
    ],
    correctAnswer: "B",
    explanation:
      "Để định nghĩa một kiểu dữ liệu tổng quát làm tham số khuôn mẫu, ta sử dụng cú pháp: `template <typename T>` hoặc `template <class T>`. Từ khóa `typename` (được khuyên dùng phổ biến hơn) cho biết `T` là một tên kiểu giả định sẽ được thay bằng kiểu thực tế lúc biên dịch.",
    difficulty: "Trung bình",
  },
];
