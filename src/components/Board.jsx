import List from './List';

const Board = () => {
    return (
        <div className='flex gap-5 overflow-x-auto overflow-y-clip h-[600px]'>
            <List heading="Incomplete"></List>
            <List heading="To Do"></List>
            <List heading="Doing"></List>
            <List heading="Under Review"></List>
            <List heading="Completed"></List>
        </div>
    );
};

export default Board;