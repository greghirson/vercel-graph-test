
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-28 10:00:00", "b": 455.25}, {"a": "2024-10-28 10:05:00", "b": 453.2}, {"a": "2024-10-28 10:10:00", "b": 462.8}, {"a": "2024-10-28 10:15:00", "b": 461.2}, {"a": "2024-10-28 10:20:00", "b": 456.25}, {"a": "2024-10-28 10:25:00", "b": 460.5}, {"a": "2024-10-28 10:30:00", "b": 454.4}, {"a": "2024-10-28 10:35:00", "b": 455.5}, {"a": "2024-10-28 10:40:00", "b": 450.0}, {"a": "2024-10-28 10:45:00", "b": 448.6666666666667}, {"a": "2024-10-28 10:50:00", "b": 452.4}, {"a": "2024-10-28 10:55:00", "b": 439.75}, {"a": "2024-10-28 11:00:00", "b": 431.6}, {"a": "2024-10-28 11:05:00", "b": 434.5}, {"a": "2024-10-28 11:10:00", "b": 440.0}, {"a": "2024-10-28 11:15:00", "b": 425.0}, {"a": "2024-10-28 11:20:00", "b": 437.4}, {"a": "2024-10-28 11:25:00", "b": 444.4}, {"a": "2024-10-28 11:30:00", "b": 442.4}, {"a": "2024-10-28 11:35:00", "b": 439.8}, {"a": "2024-10-28 11:40:00", "b": 433.8}, {"a": "2024-10-28 11:45:00", "b": 428.3333333333333}, {"a": "2024-10-28 11:50:00", "b": 419.8}, {"a": "2024-10-28 11:55:00", "b": 422.5}, {"a": "2024-10-28 12:00:00", "b": 424.5}, {"a": "2024-10-28 12:05:00", "b": 424.5}, {"a": "2024-10-28 12:10:00", "b": 424.6666666666667}, {"a": "2024-10-28 12:15:00", "b": 415.5}, {"a": "2024-10-28 12:20:00", "b": 411.8}, {"a": "2024-10-28 12:25:00", "b": 414.8}, {"a": "2024-10-28 12:30:00", "b": 427.6}, {"a": "2024-10-28 12:35:00", "b": 432.0}, {"a": "2024-10-28 12:40:00", "b": 414.4}, {"a": "2024-10-28 12:45:00", "b": 419.8}, {"a": "2024-10-28 12:50:00", "b": 414.0}, {"a": "2024-10-28 12:55:00", "b": 410.75}, {"a": "2024-10-28 13:00:00", "b": 409.0}, {"a": "2024-10-28 13:05:00", "b": 415.2}, {"a": "2024-10-28 13:10:00", "b": 410.25}, {"a": "2024-10-28 13:15:00", "b": 411.0}, {"a": "2024-10-28 13:20:00", "b": 411.0}, {"a": "2024-10-28 13:25:00", "b": 413.0}, {"a": "2024-10-28 13:30:00", "b": 419.5}, {"a": "2024-10-28 13:35:00", "b": 414.6666666666667}, {"a": "2024-10-28 13:45:00", "b": 410.6666666666667}, {"a": "2024-10-28 13:50:00", "b": 407.0}, {"a": "2024-10-28 13:55:00", "b": 407.6666666666667}, {"a": "2024-10-28 14:00:00", "b": 409.0}, {"a": "2024-10-28 14:05:00", "b": 412.8}, {"a": "2024-10-28 14:10:00", "b": 407.5}, {"a": "2024-10-28 14:15:00", "b": 408.5}, {"a": "2024-10-28 14:20:00", "b": 408.0}, {"a": "2024-10-28 14:25:00", "b": 411.0}, {"a": "2024-10-28 14:30:00", "b": 415.2}, {"a": "2024-10-28 14:35:00", "b": 406.6666666666667}, {"a": "2024-10-28 14:40:00", "b": 406.0}, {"a": "2024-10-28 14:45:00", "b": 407.0}, {"a": "2024-10-28 14:55:00", "b": 406.0}, {"a": "2024-10-28 15:00:00", "b": 406.6666666666667}, {"a": "2024-10-28 15:05:00", "b": 406.0}, {"a": "2024-10-28 15:10:00", "b": 407.0}, {"a": "2024-10-28 15:15:00", "b": 407.5}, {"a": "2024-10-28 15:20:00", "b": 405.6666666666667}, {"a": "2024-10-28 15:25:00", "b": 407.0}, {"a": "2024-10-28 15:30:00", "b": 407.5}, {"a": "2024-10-28 15:35:00", "b": 406.0}, {"a": "2024-10-28 15:40:00", "b": 404.75}, {"a": "2024-10-28 15:45:00", "b": 403.5}, {"a": "2024-10-28 15:50:00", "b": 403.5}, {"a": "2024-10-28 15:55:00", "b": 403.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    