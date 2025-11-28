async function fetchData() {
    try {
        const response = await fetch('https://69169fe4a7a34288a27ddce1.mockapi.io/api/user/comments');
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Custom-Header': 'Custom-Value'
        },
        credentials: 'include',
    };
        if (!response.ok) {
            throw new Error('Lỗi khi tải dữ liệu: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
        throw error;
    }
fetchData();
.then(data => console.log('Xử lý dữ liệu',data))
.catch(error => console.error('Đã xảy ra lỗi:', error));
