export {}

class MemoryDataBase<T> {

    protected items = new Array<T>();

    public addItem(item: T){
        this.items.push(item);
    }

    public getItemByIndex(index: number): T | undefined{
        return this.items[index]
    }

    public listItems(){
        this.items.forEach(item=> {
            console.log(item)
        })
    }
}

const namesDataBase = new MemoryDataBase<string>()
namesDataBase.addItem('John')
const first = namesDataBase.getItemByIndex(0)


class MemoryDataBaseWithDelete<T extends {id: string}> extends MemoryDataBase<T> {

    public delete(id: string) {
        const index = this.items.findIndex(x => x.id === id)
        this.items.splice(index, 1);
    }
}

const dataBaseWithIds = new MemoryDataBaseWithDelete<{id: string}>()
dataBaseWithIds.addItem({id: '123'})
const firstId = dataBaseWithIds.getItemByIndex(0)