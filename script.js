
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-27 03:00:00", "b": 466.8}, {"a": "2024-11-27 03:05:00", "b": 492.8}, {"a": "2024-11-27 03:10:00", "b": 488.4}, {"a": "2024-11-27 03:15:00", "b": 481.0}, {"a": "2024-11-27 03:20:00", "b": 462.8}, {"a": "2024-11-27 03:25:00", "b": 530.8}, {"a": "2024-11-27 03:30:00", "b": 535.6}, {"a": "2024-11-27 03:35:00", "b": 450.0}, {"a": "2024-11-27 03:40:00", "b": 420.4}, {"a": "2024-11-27 03:45:00", "b": 433.25}, {"a": "2024-11-27 03:50:00", "b": 436.6}, {"a": "2024-11-27 03:55:00", "b": 407.5}, {"a": "2024-11-27 04:00:00", "b": 408.0}, {"a": "2024-11-27 04:05:00", "b": 423.25}, {"a": "2024-11-27 04:10:00", "b": 423.2}, {"a": "2024-11-27 04:15:00", "b": 407.6666666666667}, {"a": "2024-11-27 04:20:00", "b": 411.0}, {"a": "2024-11-27 04:25:00", "b": 419.8}, {"a": "2024-11-27 04:30:00", "b": 409.25}, {"a": "2024-11-27 04:35:00", "b": 415.0}, {"a": "2024-11-27 04:40:00", "b": 494.8}, {"a": "2024-11-27 04:45:00", "b": 475.2}, {"a": "2024-11-27 04:50:00", "b": 462.2}, {"a": "2024-11-27 04:55:00", "b": 447.75}, {"a": "2024-11-27 05:00:00", "b": 420.2}, {"a": "2024-11-27 05:05:00", "b": 409.4}, {"a": "2024-11-27 05:10:00", "b": 424.2}, {"a": "2024-11-27 05:15:00", "b": 409.6666666666667}, {"a": "2024-11-27 05:20:00", "b": 423.25}, {"a": "2024-11-27 05:25:00", "b": 442.4}, {"a": "2024-11-27 05:30:00", "b": 444.4}, {"a": "2024-11-27 05:35:00", "b": 512.0}, {"a": "2024-11-27 05:40:00", "b": 452.8}, {"a": "2024-11-27 05:45:00", "b": 444.8}, {"a": "2024-11-27 05:50:00", "b": 433.2}, {"a": "2024-11-27 05:55:00", "b": 455.8}, {"a": "2024-11-27 06:00:00", "b": 458.4}, {"a": "2024-11-27 06:05:00", "b": 457.6}, {"a": "2024-11-27 06:10:00", "b": 459.4}, {"a": "2024-11-27 06:15:00", "b": 437.4}, {"a": "2024-11-27 06:20:00", "b": 468.75}, {"a": "2024-11-27 06:25:00", "b": 448.2}, {"a": "2024-11-27 06:30:00", "b": 442.8}, {"a": "2024-11-27 06:35:00", "b": 443.6}, {"a": "2024-11-27 06:40:00", "b": 471.75}, {"a": "2024-11-27 06:45:00", "b": 437.0}, {"a": "2024-11-27 06:50:00", "b": 425.0}, {"a": "2024-11-27 06:55:00", "b": 418.0}, {"a": "2024-11-27 07:00:00", "b": 429.4}, {"a": "2024-11-27 07:05:00", "b": 426.4}, {"a": "2024-11-27 07:10:00", "b": 440.4}, {"a": "2024-11-27 07:15:00", "b": 512.6}, {"a": "2024-11-27 07:20:00", "b": 431.4}, {"a": "2024-11-27 07:25:00", "b": 423.75}, {"a": "2024-11-27 07:30:00", "b": 435.0}, {"a": "2024-11-27 07:35:00", "b": 485.8}, {"a": "2024-11-27 07:40:00", "b": 472.6}, {"a": "2024-11-27 07:45:00", "b": 445.6666666666667}, {"a": "2024-11-27 07:50:00", "b": 456.6}, {"a": "2024-11-27 07:55:00", "b": 497.4}, {"a": "2024-11-27 08:00:00", "b": 447.8}, {"a": "2024-11-27 08:05:00", "b": 492.6}, {"a": "2024-11-27 08:10:00", "b": 448.8}, {"a": "2024-11-27 08:15:00", "b": 442.2}, {"a": "2024-11-27 08:20:00", "b": 458.2}, {"a": "2024-11-27 08:25:00", "b": 439.2}, {"a": "2024-11-27 08:30:00", "b": 433.2}, {"a": "2024-11-27 08:35:00", "b": 455.0}, {"a": "2024-11-27 08:40:00", "b": 432.3333333333333}, {"a": "2024-11-27 08:45:00", "b": 420.25}, {"a": "2024-11-27 08:50:00", "b": 437.75}, {"a": "2024-11-27 08:55:00", "b": 418.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    