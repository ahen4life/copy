let usersList = ["user1", "Address 1", "user2", "Address 2", "user3", "Address 3"];

document.getElementById('user_name').addEventListener('change', function(e) {
  let userAddress = usersList[usersList.indexOf(e.target.value) + 1];
  document.getElementById('to_copy').textContent = userAddress;
})
