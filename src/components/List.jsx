import Card from './Card';

const List = ({ heading, color }) => {
    return (
        <div className='bg-slate-100 w-min px-3'>
            {/* header */}
            <div className='flex justify-between items-center px-4 mb-3'>
                <div className='flex items-center gap-2'>
                    <div className={`w-5 h-5 ${color} rounded-s-full`}></div>
                    <h2 className='font-semibold text-xl py-4'>{heading}</h2>
                </div>
                <h2 className='font-semibold text-xl py-4'>0</h2>
            </div>

            <div className='space-y-4 overflow-y-auto overflow-x-clip h-[500px] pb-4 scrollbar-thin scrollbar-thumb-teal-700 scrollbar-track-gray-200'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>

    );
};

export default List;