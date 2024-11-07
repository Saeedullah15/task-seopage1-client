import Card from './Card';

const List = ({ heading }) => {
    return (
        <div className='bg-slate-100 w-min px-3'>
            <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-xl py-4'>{heading}</h2>
                <h2 className='font-semibold text-xl py-4'>0</h2>
            </div>

            <div className='space-y-4 overflow-y-auto h-svh pb-5'>
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