$(function(){
    var  TEMPLATE=$(".template").html();
    var RIGHT_TEMPLATE =$(".right-template").html();
    console.log("template",TEMPLATE)



    var $listNotBought = $(".list-not-bought");
    var $listBought = $(".list-bought");



    function edit($node, editF) {
        $node.fadeOut(200, function () {
            editF();
            $node.fadeIn(200);
        })
    }


    $(".button").click(function() {
        var title = $(".enter-name").val();
        if (title !=""){
            addItem(title);
            $(".enter-name").val("");
            $(".enter-name").focus();
        }
    });


    function addItem(title){
        var $node = $(TEMPLATE);
        var $nodeRight = $(RIGHT_TEMPLATE);


        var $title = $node.find(".title");
        $title.text(title);
        var $titleR = $nodeRight.find(".product-name");
        $titleR.text(title);

        var number=1;
        var $number = $node.find(".number");
        $number.text(number);
        var $numberR = $nodeRight.find(".product-number");
        $numberR.text(number);

        var isBought = false;

        var $editInput = $node.find(".edit-title");

        $node.find(".buy").click(function () {
            edit($node, function () {
                $node.find(".buy").css("display", "none");
                $node.find(".delete").css("display", "none");
                $node.find(".unbuy").css("display", "inline-block");
                $node.find(".product-number").css("display", "inline-block");
                $node.find(".product-number").text(number);
                $node.find(".title").css("display", "none");
                $node.find(".edit-title").css("display", "none");
                $node.find(".crossedTitle").css("display", "inline-block");
                $node.find(".crossedTitle").text(title);
                $node.find(".minus").css("display", "none");
                $node.find(".plus").css("display", "none");
                isBought = true;
                $node.slideUp(250, function () {
                    $nodeRight.remove();
                    $listBought.append($nodeRight);
                    $titleR.css("text-decoration", "line-through");
                    $numberR.css("text-decoration", "line-through");
                });
            });


        });

        $node.find(".unbuy").click(function () {
            edit($node, function () {

                $node.find(".minus").css("display", "inline-block");
                $node.find(".plus").css("display", "inline-block");
                $node.find(".number").css("display", "inline-block");
                $node.find(".product-number").css("display", "none");
                $node.find(".edit-title").css("display", "none");
                $node.find(".title").css("display", "inline-block");
                $node.find(".crossedTitle").css("display", "none");
                $node.find(".buy").css("display", "inline-block");
                $node.find(".delete").css("display", "inline-block");
                $node.find(".unbuy").css("display", "none");
                isBought = false;
                $node.slideUp(250, function () {
                    $nodeRight.remove();
                    $listNotBought.append($nodeRight);
                    $titleR.css("text-decoration", "none");
                    $numberR.css("text-decoration", "none");
                });
            });
        });

        $node.find(".delete").click(function () {
            $node.slideUp(300, function () {
                $node.remove();
                $nodeRight.remove();
            });
        });

        $title.click(function () {
            if(!isBought) {
                edit($node, function(){
                    $editInput.val(title);
                    $title.css("display", "none");
                    $editInput.css("display", "inline-block");
                    $editInput.css("value", $title.text());
                    $editInput.focus();
                })
            }
        });

        $editInput.focusout(function () {
            title = $editInput.val();
            $title.text(title);
            $title.css("display", "inline-block");
            $editInput.css("display", "none");
            $titleR.text(title);
        });

        $node.find(".plus").click(function () {
            number = number+1;
            $number.text(number);
            if (number > 1){
                $node.find(".minus").css("background-color", "#DB2828");
                $node.find(".minus").css("border-color", "#DB2828");
            }
            $numberR.text(number);
        });

        $node.find(".minus").click(function () {
            if (number > 1) {
                number -= 1;
                $number.text(number);
                if (number == 1){
                    $node.find(".minus").css("background-color", "#ff5b4b");
                    $node.find(".minus").css("border-color", "#ff5b4b");
                }
                $numberR.text(number);
            }
        });

        $(".left .part").append($node);
        $listNotBought.append($nodeRight);
        $node.hide();
        $node.slideDown(420);



    }


    addItem("Tomatoes");
    setTimeout(function () {
        addItem("Cookies");
    }, 100);
    setTimeout(function () {
        addItem("Cheese");
    }, 200);

    console.log(TEMPLATE);
});