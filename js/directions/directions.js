function Directions(){
    this.itemOne =false;
    this.itemTwo =false;
    this.itemThree = false;
    this.itemFour = false;
    this.itemFive = false;

    this.setItemOne =function(){
        this.itemOne = true;
    }
    this.setItemTwo =function(){
        this.itemTwo = true;
    }
    this.setItemThree =function(){
        this.itemThree = true;
    }
    this.setItemFour =function(){
        this.itemFour = true;
    }
    this.setItemFive =function(){
        this.itemFive = true;
    }

    this.complete = function(){
        return (itemOne && itemTwo && itemThree && itemFour && itemFive)

    }
}