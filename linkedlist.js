class Node 
{
    constructor(value)
    {
        this.value = value
        this.next = null
       
    }

}
class LinkedList
{
    constructor()
    {
        this.head = null;
        this.size = 0 ;

    }
    isEmpty()
    {
        return this.size === 0
    }
    getSize()
    {
        return this.size
    }
    prepend(value)
    {
        const node = new Node(value);
        if(this.isEmpty())
        {
            this.head = node
        } 
        else
        {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value)
    {
        const node = new Node(value);
        if(this.isEmpty())
        {
            this.head = node;

        }
        else 
        {
            let curr = this.head
            while(curr.next)
            {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }
    insert(value,index)
    { 
        if (index < 0 || index > this.size) {
            
            return ;
          }
          if (index === 0) {
            this.prepend(value);
          } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
              prev = prev.next;
            }
            if(prev === null)
            {
                console.log("prev is nulll");
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
    removeFrom(index){
        if (index < 0 || index >= this.size)
        {
            return null;

        }
        let removeNode;
        if(index === 0 )
        {
            removeNode = this.head;
            this.head = this.head.next;
        } else
        {
            let prev = this.head;
            for (let i = 0; i <index - 1; i++)
            {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value
    }
    search(value)
    {
        if(this.isEmpty())
        {
            return -1 
        }
        let i =0;
        let curr = this.head;
        while (curr) {
            if(curr.value === value)
            { return value;

            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr)
        {
            let next = curr.next
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    print()
    {
        if(this.isEmpty())
        {
            console.log('List is empty');
        }
        else
        {
            let curr = this.head;
            let listValues = "";
            while(curr)
            {
                listValues += `${curr.value}->`
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}
const list = new LinkedList()
console.log('List is empty?' ,list.isEmpty());
console.log('List size ',list.getSize());
// list.print()
// list.append(10)
// list.print()
// list.append(20)
// list.append(30)
list.print();
list.insert(100,0);
list.print();
list.insert(20,1);
list.print();
 list.insert(30,2)
list.print();
list.insert(300,3)
list.print();
list.insert(330,4)
list.print();
list.removeFrom(4)
list.print()
console.log(list.search(15));
list.reverse();
list.print();