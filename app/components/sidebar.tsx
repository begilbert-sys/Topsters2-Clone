import Options from '@/app/components/options';
import Search from '@/app/components/search';
export default function SideBar() {
    return (
        <div>
            <div>
                <button>New</button>
                <button>Rename</button>
                <button>Delete</button>
            </div>
            <Options />
            <Search />

        </div>

    )
}