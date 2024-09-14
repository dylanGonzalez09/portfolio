import {
  IconBrandNextjs,
  IconBrandPrisma,
  IconBrandThreejs,
  IconShield,
  IconBrandTypescript,
  IconBrandMysql,
  IconSql,
  IconNfc,
  IconCoffee,
  IconBrandAndroid,
  IconBrandReact,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandDocker,
} from "@tabler/icons-react";
import { PostgresqlIcon } from "./PostgresqlIcon";

export const PillTech = ({ name }: { name: string }): React.ReactElement => {
  const setIcon = () => {
    switch (name) {
      case "Next JS":
        return <IconBrandNextjs stroke={1} width={25} height={25} />;
      case "Prisma":
        return <IconBrandPrisma stroke={1} width={25} height={25} />;
      case "Three JS":
        return <IconBrandThreejs stroke={1} width={25} height={25} />;
      case "Next Auth":
        return <IconShield stroke={1} width={25} height={25} />;
      case "TypeScript":
        return <IconBrandTypescript stroke={1} width={25} height={25} />;
      case "MySQL":
        return <IconBrandMysql stroke={1} width={25} height={25} />;
      case "SQLite":
        return <IconSql stroke={1} width={25} height={25} />;
      case "NFC":
        return <IconNfc stroke={1} width={25} height={25} />;
      case "Java":
        return <IconCoffee stroke={1} width={25} height={25} />;
      case "React JS":
        return <IconBrandReact stroke={1} width={25} height={25} />;
      case "Mongo DB":
        return <IconBrandMongodb stroke={1} width={25} height={25} />;
      case "Node JS":
        return <IconBrandNodejs stroke={1} width={25} height={25} />;
      case "Android Studio":
        return <IconBrandAndroid stroke={1} width={25} height={25} />;
      case "Docker":
        return <IconBrandDocker stroke={1} width={25} height={25} />;
      case "PostgreSql":
        return <PostgresqlIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <span className="relative flex items-center justify-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
        {setIcon()}
        {name}
      </span>
    </div>
  );
};
