defmodule ReportsGenerator.Parser do
  def parse_file(filename) do
    "lib/reports/#{filename}.csv"
    |> File.stream!()
    |> Stream.map(fn line -> parse_line(line) end)
  end

  defp parse_line(line) do
    line
    |> String.trim()
    |> String.split(~r/[,\\n]/)
    |> List.update_at(2, &String.to_integer/1)
  end
end
