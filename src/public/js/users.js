console.log("Users frontend javascript file");

$(function () {
  $(".member-status").on("change", function (e) {
    const id = e.target.id,
      meberStatus = $(`#${id}.member-status`).val();
    //TODO UpdateChosenUser
    axios
      .post("/admin/user/edit", {
        _id: id,
        memberStatus: meberStatus,
      })
      .then((response) => {
        console.log("response:", response);
        const result = response.data;
        console.log("result:", result);

        if (result.data) {
          $(".member-status").blur();
        } else alert("User update failed!");
      })
      .catch((err) => {
        console.log("err");
        alert("User update failed");
      });
  });
});
