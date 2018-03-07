package pkh.form.fileManager;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FileService {
    private static final String LIST_FILE_NAME = "pdfListForCleanup.txt";

    // write in file
    // file name and timestamp
    public static void addFileName(String path, String name) throws IOException {
        String fullPath = path + LIST_FILE_NAME;
        // try to open file
        File file = new File(fullPath);
        // If file exists and is no directory => true, else create file
        boolean fileExists = file.exists() && !file.isDirectory() || file.createNewFile();

        if (fileExists) {
            // build Sring to write data to file
            String writeData = ZonedDateTime.now() + " " + name + System.lineSeparator();
            Files.write(Paths.get(fullPath), writeData.getBytes(), StandardOpenOption.APPEND);
        }
    }

    // read file
    public static void checkFileForOldEntries(String path) {
        String fullPath = path + LIST_FILE_NAME;
        //read file into stream
        List<String> list;
        try (Stream<String> stream = Files.lines(Paths.get(fullPath))) {
            list = stream.filter(line ->
                    ZonedDateTime.parse(line.substring(0, line.indexOf(" "))).plusHours(1).isBefore(ZonedDateTime.now())
            ).collect(Collectors.toList());

            if (list.size() > 0) {
                list.forEach(FileService::deleteFile);
                deleteEntry(fullPath, list);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // start and handle timer
    // TODO: write a time handler service which calls the checkFileForOldEntries method
    // After implementation delete method call in

    // delete old files
    private static boolean deleteFile(String fileEntry) {
        String fileName = fileEntry.substring(fileEntry.indexOf(" ") + 1);
        // System.out.println(fileName);
        File file = new File(fileName);

        return file.exists() && file.delete();
    }

    private static void deleteEntry(String path, List<String> fileEntries) {
        try (Stream<String> lines = Files.lines(Paths.get(path))) {
            List<String> remained = lines.collect(Collectors.toList());

            for (String toDelete : fileEntries) {
                remained.remove(toDelete);
            }

            Files.write(Paths.get(path), remained);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
