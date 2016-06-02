<script>

var year=prompt(year);
if (parseInt(year/4)!=year/4) {
alert(year+"-th year is not intercalary");
}
else if (parseInt(year/100)!=year/100) {
alert(year+"-th year is intercalary");
}
else if (parseInt(year/100)!=year/100||parseInt(year/400)!=year/400) {
alert(year+"-th year is not intercalary");
}
else
{alert(year+"-th year is intercalary");
}

</script>
