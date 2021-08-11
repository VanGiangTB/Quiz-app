import React from 'react';

var question_json=[
    {
        id:1,
        name:'1',
        text: ' Xà phòng hoá chất nào sau đây thu được glixerol ?',
        answer: [
            { id:1, answer:'tristearin',right:'true'},
            { id:2, answer:'metyl axetat',right:'false'},
            { id:3, answer:' metyl fomat',right:'false'},
            { id:4, answer:' benzyl axetat',right:'false'},
        ]
    },
    {
        id:2,
        name:'2',
        text: 'Phát biểu nào dưới đây không đúng ?',
        answer: [
            { id:1, answer:'  Chất béo không tan trong nước.',right:'false'},
            { id:2, answer:'Phân tử chất béo chứa nhóm chức este.',right:'false'},
            { id:3, answer:'  Dầu ăn và dầu mỏ có cùng thành phần nguyên tố.',right:'true'},
            { id:4, answer:' Chất béo còn có tên là triglixerit.',right:'false'},
        ]
    },
    {
        id:3,
        name:'3',
        text: ' Cho các chất lỏng sau: axit axetic, glixerol, triolein. Để phân biệt các chất lỏng trên, có thể chỉ cần dùng',
        answer: [
            { id:1, answer:' nước và quỳ tím',right:'true'},
            { id:2, answer:'nước và dung dịch NaOH',right:'false'},
            { id:3, answer:' dung dịch NaOH',right:'false'},
            { id:4, answer:'  nước brom',right:'false'},
        ]
    },
    {
        id:4,
        name:'4',
        text: 'Trong chế tạo ruột phích người ta thường dùng phương pháp nào sau đây:',
        answer: [
            { id:1, answer:' Cho axetilen tác dụng với dung dịch AgNO3/NH3',right:'false'},
            { id:2, answer:'Cho anđehit fomic tác dụng với dung dịch AgNO3/NH3',right:'false'},
            { id:3, answer:'  Cho axit fomic tác dụng với dung dịch AgNO3/NH3',right:'false'},
            { id:4, answer:' Cho glucozơ tác dụng với dung dịch AgNO3/NH3',right:'true'},
        ]
    },
    {
        id:5,
        name:'5',
        text: ' Phản ứng nào sau đây không tạo ra glucozơ:',
        answer: [
            { id:1, answer:'Lục hợp HCHO xúc tác Ca(OH)2',right:'false'},
            { id:2, answer:'Tam hợp CH3CHO',right:'true'},
            { id:3, answer:' Thủy phân mantozơ',right:'false'},
            { id:4, answer:' Thủy phân saccarozơ',right:'false'},
        ]
    },
    {
        id:6,
        name:'6',
        text: 'Chất nào sau đây có mạch cacbon phân nhánh ?',
        answer: [
            { id:1, answer:' amilozo ',right:'false'},
            { id:2, answer:'amilopectin ',right:'true'},
            { id:3, answer:' saecarozơ  ',right:'false'},
            { id:4, answer:' xenlulozo',right:'false'},
        ]
    },
    {
        id:7,
        name:'7',
        text: 'Đơn vị nào dưới đây không phải là đơn vị tính công suất?',
        answer: [
            { id:1, answer:'J.s',right:'true'},
            { id:2, answer:'N.m/s',right:'false'},
            { id:3, answer:'W',right:'false'},
            { id:4, answer:'HP',right:'false'},
        ]
    },
    {
        id:8,
        name:'8',
        text: 'Một vật chuyển động không nhất thiết phải có',
        answer: [
            { id:1, answer:'Vận tốc  ',right:'false'},
            { id:2, answer:' Động lượng',right:'false'},
            { id:3, answer:'Động năng ',right:'false'},
            { id:4, answer:'Thế năng',right:'true'},
        ]
    },
    {
        id:9,
        name:'9',
        text: 'Một tên lửa đang chuyển động nếu khối lượng giảm một nửa và vận tốc tăng gấp đôi thì động năng của tên lửa sẽ',
        answer: [
            { id:1, answer:'không đổi',right:'false'},
            { id:2, answer:'tăng gấp đôi',right:'true'},
            { id:3, answer:'tăng gấp bốn lần',right:'false'},
            { id:4, answer:' tăng gấp tám lần',right:'false'},
        ]
    },
    {
        id:10,
        name:'10',
        text: ' Khi 1 vật từ độ cao z, với cùng vận tốc đầu, bay xuống đất theo những con đường khác nhau (bỏ qua ma sát). Chọn câu sai.',
        answer: [
            { id:1, answer:'Gia tốc rơi bằng nhau.',right:'false'},
            { id:2, answer:'Thời gian rơi bằng nhau.',right:'true'},
            { id:3, answer:'Công của trọng lực bằng nhau',right:'false'},
            { id:4, answer:'Độ lớn vận tốc chạm đất bằng nhau.',right:'false'},
        ]
    },
    {
        id:11,
        name:'11',
        text: ' Dạng địa hình chiếm diện tích lớn nhất trên lãnh thổ nước ta là:',
        answer: [
            { id:1, answer:'Đồng bằng',right:'false'},
            { id:2, answer:'Đồi núi thấp',right:'true'},
            { id:3, answer:'Núi trung bình',right:'false'},
            { id:4, answer:'Núi cao',right:'false'},
        ]
    },
    {
        id:12,
        name:'12',
        text: ' Ranh giới tự nhiên của vùng núi Trường Sơn Bắc và Trường Sơn Nam là:',
        answer: [
            { id:1, answer:' dãy Hoàng Liên Sơn',right:'false'},
            { id:2, answer:'dãy Hoành Sơn',right:'false'},
            { id:3, answer:'sông Cả',right:'false'},
            { id:4, answer:'dãy Bạch Mã',right:'true'},
        ]
    },
    {
        id:13,
        name:'13',
        text: 'Nét nổi bật của địa hình vùng núi Tây Bắc là:',
        answer: [
            { id:1, answer:'Gồm các khối núi và cao nguyên',right:'false'},
            { id:2, answer:'Có nhiều dãy núi cao và đồ sộ nhất nước ta.',right:'true'},
            { id:3, answer:'Có bốn cánh cung ',right:'false'},
            { id:4, answer:' Địa hình thấp và hẹp ngang.',right:'false'},
        ]
    },
    {
        id:14,
        name:'14',
        text: 'Bài thơ “Tây Tiến” được Quang Dũng sáng tác trong hoàn cảnh nào?',
        answer: [
            { id:1, answer:'Năm 1947, khi Quang Dũng còn là Đại đội trưởng của đoàn quân Tây Tiến.',right:'true'},
            { id:2, answer:'Cuối năm 1948, khi Quang Dũng không còn ở đoàn quân Tây Tiến mà đã chuyển sang đơn vị khác.',right:'false'},
            { id:3, answer:'Khi Quang Dũng làm công tác văn nghệ tại chiến khu Việt Bắc.',right:'false'},
            { id:4, answer:'Cả 3 đáp án đều không chính xác.',right:'false'},
        ]
    },
    {
        id:15,
        name:'15',
        text: 'Bài thơ “Tây Tiến” của Quang Dũng còn có tên khác nào trong các tên sau đây?',
        answer: [
            { id:1, answer:'Lên Tây Tiến',right:'false'},
            { id:2, answer:'Nhớ Tây Tiến',right:'true'},
            { id:3, answer:'Tây Tiến ơi!',right:'false'},
            { id:4, answer:'Tây Tiến kỉ niệm',right:'false'},
        ]
    },
    {
        id:16,
        name:'16',
        text: 'Câu thơ nào thể hiện sự anh dũng, coi cái chết nhẹ tựa lông hồng của người lính Tây Tiến?',
        answer: [
            { id:1, answer:'Heo hút cồn mây súng ngửi trời Ngàn thước lên cao ngàn thước xuống',right:'false'},
            { id:2, answer:'Anh bạn dãi dầu không bước nữa Gục lên súng mũ bỏ quên đời',right:'true'},
            { id:3, answer:'Chiều chiều oai linh thác gầm thét Đêm đêm Mường Hịch cọp trêu người',right:'false'},
            { id:4, answer:'Tất cả các đáp án trên',right:'false'},
        ]
    },
    {
        id:17,
        name:'17',
        text: 'I’m afraid very few people know about the concert and almost no one will come. If only the posters _____________ on time.',
        answer: [
            { id:1, answer:' were hanging',right:'false'},
            { id:2, answer:'were hung  ',right:'false'},
            { id:3, answer:'were hanged ',right:'false'},
            { id:4, answer:'had been hung',right:'true'},
        ]
    },
    {
        id:18,
        name:'18',
        text: 'The opposition will be elected into government at the next election, without a ________ of a doubt.',
        answer: [
            { id:1, answer:'shade',right:'false'},
            { id:2, answer:' shadow',right:'true'},
            { id:3, answer:'benefit',right:'false'},
            { id:4, answer:' hue',right:'false'},
        ]
    },
    {
        id:19,
        name:'19',
        text: 'Although he is my friend, I find it hard to _______ his selfishness',
        answer: [
            { id:1, answer:'put up with',right:'true'},
            { id:2, answer:'catch up with ',right:'false'},
            { id:3, answer:'keep up with',right:'false'},
            { id:4, answer:'come down with',right:'false'},
        ]
    },
    {
        id:20,
        name:'20',
        text: 'The 1st week of classes at university is a little ______ because so many students get lost, change classes or go to the wrong place.',
        answer: [
            { id:1, answer:'uncontrolled',right:'false'},
            { id:2, answer:' arranged',right:'false'},
            { id:3, answer:'chaotic',right:'true'},
            { id:4, answer:'notorious',right:'false'},
        ]
    },
]

function Question(props) {


    return (
        <div>
            
        </div>
    );
}

export default Question;