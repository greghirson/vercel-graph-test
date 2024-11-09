
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-09 00:20:00", "b": 508.2}, {"a": "2024-11-09 00:25:00", "b": 498.4}, {"a": "2024-11-09 00:30:00", "b": 494.0}, {"a": "2024-11-09 00:35:00", "b": 485.0}, {"a": "2024-11-09 00:40:00", "b": 491.8}, {"a": "2024-11-09 00:45:00", "b": 504.0}, {"a": "2024-11-09 00:50:00", "b": 493.2}, {"a": "2024-11-09 00:55:00", "b": 488.0}, {"a": "2024-11-09 01:00:00", "b": 483.8}, {"a": "2024-11-09 01:05:00", "b": 474.4}, {"a": "2024-11-09 01:10:00", "b": 478.8}, {"a": "2024-11-09 01:15:00", "b": 485.75}, {"a": "2024-11-09 01:20:00", "b": 476.8}, {"a": "2024-11-09 01:25:00", "b": 470.0}, {"a": "2024-11-09 01:30:00", "b": 459.2}, {"a": "2024-11-09 01:35:00", "b": 456.0}, {"a": "2024-11-09 01:40:00", "b": 456.8}, {"a": "2024-11-09 01:45:00", "b": 462.8}, {"a": "2024-11-09 01:50:00", "b": 449.5}, {"a": "2024-11-09 01:55:00", "b": 443.8}, {"a": "2024-11-09 02:00:00", "b": 446.25}, {"a": "2024-11-09 02:05:00", "b": 441.6}, {"a": "2024-11-09 02:10:00", "b": 451.6}, {"a": "2024-11-09 02:15:00", "b": 440.8}, {"a": "2024-11-09 02:20:00", "b": 428.6666666666667}, {"a": "2024-11-09 02:25:00", "b": 433.25}, {"a": "2024-11-09 02:30:00", "b": 430.0}, {"a": "2024-11-09 02:35:00", "b": 430.4}, {"a": "2024-11-09 02:40:00", "b": 443.2}, {"a": "2024-11-09 02:45:00", "b": 427.8}, {"a": "2024-11-09 02:50:00", "b": 424.2}, {"a": "2024-11-09 02:55:00", "b": 426.0}, {"a": "2024-11-09 03:00:00", "b": 423.75}, {"a": "2024-11-09 03:05:00", "b": 417.4}, {"a": "2024-11-09 03:10:00", "b": 417.75}, {"a": "2024-11-09 03:15:00", "b": 432.0}, {"a": "2024-11-09 03:20:00", "b": 423.6}, {"a": "2024-11-09 03:25:00", "b": 425.6}, {"a": "2024-11-09 03:30:00", "b": 422.6}, {"a": "2024-11-09 03:35:00", "b": 417.5}, {"a": "2024-11-09 03:40:00", "b": 416.75}, {"a": "2024-11-09 03:45:00", "b": 417.2}, {"a": "2024-11-09 03:50:00", "b": 410.3333333333333}, {"a": "2024-11-09 03:55:00", "b": 421.5}, {"a": "2024-11-09 04:00:00", "b": 426.75}, {"a": "2024-11-09 04:05:00", "b": 417.25}, {"a": "2024-11-09 04:10:00", "b": 422.6}, {"a": "2024-11-09 04:15:00", "b": 428.0}, {"a": "2024-11-09 04:20:00", "b": 412.6666666666667}, {"a": "2024-11-09 04:25:00", "b": 415.0}, {"a": "2024-11-09 04:30:00", "b": 410.6}, {"a": "2024-11-09 04:35:00", "b": 413.8}, {"a": "2024-11-09 04:40:00", "b": 418.2}, {"a": "2024-11-09 04:45:00", "b": 417.75}, {"a": "2024-11-09 04:50:00", "b": 415.75}, {"a": "2024-11-09 04:55:00", "b": 411.2}, {"a": "2024-11-09 05:00:00", "b": 409.5}, {"a": "2024-11-09 05:05:00", "b": 415.2}, {"a": "2024-11-09 05:10:00", "b": 407.5}, {"a": "2024-11-09 05:15:00", "b": 408.0}, {"a": "2024-11-09 05:20:00", "b": 408.5}, {"a": "2024-11-09 05:25:00", "b": 410.3333333333333}, {"a": "2024-11-09 05:30:00", "b": 414.75}, {"a": "2024-11-09 05:35:00", "b": 409.0}, {"a": "2024-11-09 05:40:00", "b": 407.0}, {"a": "2024-11-09 05:45:00", "b": 407.0}, {"a": "2024-11-09 05:50:00", "b": 410.6666666666667}, {"a": "2024-11-09 05:55:00", "b": 410.25}, {"a": "2024-11-09 06:00:00", "b": 410.75}, {"a": "2024-11-09 06:05:00", "b": 418.6}, {"a": "2024-11-09 06:10:00", "b": 430.0}, {"a": "2024-11-09 06:15:00", "b": 433.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    