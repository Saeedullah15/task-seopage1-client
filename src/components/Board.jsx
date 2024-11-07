import List from './List';

const Board = () => {
    return (
        <div className='flex gap-5 overflow-x-auto overflow-y-clip h-[600px] scrollbar-thin scrollbar-thumb-teal-700 scrollbar-track-gray-200'>
            <List heading="Incomplete" color="bg-red-600"></List>
            <List heading="To Do" color="bg-blue-400"></List>
            <List heading="Doing" color="bg-yellow-300"></List>
            <List heading="Under Review" color="bg-purple-500"></List>
            <List heading="Completed" color="bg-green-600"></List>
        </div>
    );
};

export default Board;