import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About : React.FC = () => {
    return (
        <div className="p-6 space-y-4">
            <Header/>
                <h1 className="text-2xl font-bold mb-4">About Page</h1>
                <div className="flex gap-4">
                    <Button size="text-sm" shape="rounded-sm">
                        Small Rounded-sm
                    </Button>
                    <Button size="text-base" shape="rounded-md">
                        Medium Rounded-md
                    </Button>
                    <Button size="text-lg" shape="rounded-lg">
                        Large Rounded-lg
                    </Button>
                </div>
        </div>
    )
}
export default About;