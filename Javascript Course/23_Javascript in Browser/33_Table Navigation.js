/*
    Table Links:
        Certain DOM elements may provide additional properties specific to their type for 
        convenience, Table element support the following properties:

        * table.rows -> collection of tr elements
        * table.caption -> reference of <caption>
        * table.thead -> reference of <thead>
        * table.tfoot -> reference to <tfoot>
        * table.tBodies -> collection of <tbody> elements
        * tbody.rows -> collection of <tr> inside
        * tr.cells -> collection of td and th
        * tr.SectionRowIndex -> index of tr inside 
        * tr.rowsIndex -> Row number starting from 0
        * td.callIndex -> no of cells inside <tr>
*/ 


let t = document.body.firstElementChild.firstElementChild
console.log(t)