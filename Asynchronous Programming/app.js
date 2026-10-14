console.log('Before');

console.log('After');

getDataFromDB(1, (user)=>{
    console.log("User", user);

});


function getDataFromDB(id, callback) {
    setTimeout(() => {
        console.log('Reading A Data From Database...');
        callback({ id: id, userName: 'John Doe' });
    }, 2000);
}
