defmodule ReportsGenerator do
  def build(filename) do
    "lib/reports/#{filename}.csv"
    |> File.read()
    |> handle_file()
  end

  def handle_file({:ok, file_contet}), do: file_contet
  def handle_file({:error, reason}), do: "Error on opening file. Reason: #{reason}"
end

# ReportsGenerator.build("report_test")
