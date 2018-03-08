$(function(){
    var  TEMPLATE=$(".template").html();
    var RIGHT_TEMPLATE =$(".right-template").html();
    console.log("template",TEMPLATE)

    var $itemsList = $(".left");

    var $listNotBought = $(".list-not-bought");
    var $listBought = $(".list-bought");




    function refreshRightColumn(){

        $listBought.html("");
        $listNotBought.html("");

        function listItems(selector, $destination){
            $selector.each(function(i, item){
                var $item = $(item);
                var title = $item.find(".title").text();
                var quantity = $item.find(".quantity").text();


                var $node = $(RIGHT_TEMPLATE);
                $node.find(".title").text(title);
                $node.find(".quantity").text(quantity);
                $destination.append($node);
            })
        }

        listItems($(".left .buy-block unbought"), $listNotBought);
        listItems($(".left .buy-block bought"), $listBought);
    }

    function addItem(title){
        var $node = $(TEMPLATE);
        var $nodeR = $(RIGHT_TEMPLATE);


        var $title = $node.find(".title");
        $title.text(title);
        var $titleR = $nodeR.find(".product-name");
        $titleR.text(title);

        var quantity=1;
        var $quantity = $node.find(".quantity");
        $quantity.text(quantity);
        var $quantityR = $nodeR.find(".product-number");
        $quantityR.text($quantity);

        var isBought = false;

        var $editInput = $node.find(".edit-title");

        $node.find(".buy").click(function () {
            $node.addClass("bought");
            $node.removeClass("unbought");
            refreshRightColumn();

        });

        $node.find(".unbuy").click(function () {
            $node.addClass("unbought");
            $node.removeClass("bought");
            refreshRightColumn();

        });

        $node.find("delete").click(function(){
            $node.remove();
            refreshRightColumn();
        });

        console.log(title, $node);

        $itemsList.append($node);

        refreshRightColumn();

    }


    addItem("Помідори");
    setTimeout(function () {
        addItem("Печиво");
    }, 100);
    setTimeout(function () {
        addItem("Сир");
    }, 200);

    console.log(TEMPLATE);
});