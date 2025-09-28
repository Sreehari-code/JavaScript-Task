let a = "76"
let mark = Number(a)

switch (true) {
    case (mark >= 90 && mark <= 100):
        {
            console.log("Grade A")
            break
        }
    case (mark >= 75 && mark < 90):
        {
            console.log("Grade B")
            break
        }
    case (mark >= 50 && mark < 75):
        {
            console.log("Grade C")
            break
        }
    case (mark < 50):
        {
            console.log("Fail")
            break
        }
}