
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-22 01:30:00", "b": 476.6}, {"a": "2024-10-22 01:35:00", "b": 469.0}, {"a": "2024-10-22 01:40:00", "b": 461.8}, {"a": "2024-10-22 01:45:00", "b": 464.8}, {"a": "2024-10-22 01:50:00", "b": 469.2}, {"a": "2024-10-22 01:55:00", "b": 462.0}, {"a": "2024-10-22 02:00:00", "b": 452.0}, {"a": "2024-10-22 02:05:00", "b": 457.6}, {"a": "2024-10-22 02:10:00", "b": 466.3333333333333}, {"a": "2024-10-22 02:15:00", "b": 462.75}, {"a": "2024-10-22 02:20:00", "b": 464.3333333333333}, {"a": "2024-10-22 02:25:00", "b": 469.75}, {"a": "2024-10-22 02:30:00", "b": 466.2}, {"a": "2024-10-22 02:35:00", "b": 460.25}, {"a": "2024-10-22 02:40:00", "b": 468.4}, {"a": "2024-10-22 02:45:00", "b": 460.2}, {"a": "2024-10-22 02:50:00", "b": 466.0}, {"a": "2024-10-22 02:55:00", "b": 468.4}, {"a": "2024-10-22 03:00:00", "b": 457.4}, {"a": "2024-10-22 03:05:00", "b": 465.2}, {"a": "2024-10-22 03:10:00", "b": 470.2}, {"a": "2024-10-22 03:15:00", "b": 469.8}, {"a": "2024-10-22 03:20:00", "b": 457.6}, {"a": "2024-10-22 03:25:00", "b": 472.4}, {"a": "2024-10-22 03:30:00", "b": 467.0}, {"a": "2024-10-22 03:35:00", "b": 451.6}, {"a": "2024-10-22 03:40:00", "b": 460.8}, {"a": "2024-10-22 03:45:00", "b": 472.6}, {"a": "2024-10-22 03:50:00", "b": 474.2}, {"a": "2024-10-22 03:55:00", "b": 460.6}, {"a": "2024-10-22 04:00:00", "b": 461.0}, {"a": "2024-10-22 04:05:00", "b": 475.6}, {"a": "2024-10-22 04:10:00", "b": 482.2}, {"a": "2024-10-22 04:15:00", "b": 483.6}, {"a": "2024-10-22 04:20:00", "b": 485.6}, {"a": "2024-10-22 04:25:00", "b": 468.5}, {"a": "2024-10-22 04:30:00", "b": 477.0}, {"a": "2024-10-22 04:35:00", "b": 484.8}, {"a": "2024-10-22 04:40:00", "b": 478.4}, {"a": "2024-10-22 04:45:00", "b": 476.25}, {"a": "2024-10-22 04:50:00", "b": 478.5}, {"a": "2024-10-22 04:55:00", "b": 480.75}, {"a": "2024-10-22 05:00:00", "b": 483.8}, {"a": "2024-10-22 05:05:00", "b": 474.2}, {"a": "2024-10-22 05:10:00", "b": 459.8}, {"a": "2024-10-22 05:15:00", "b": 463.0}, {"a": "2024-10-22 05:20:00", "b": 462.8}, {"a": "2024-10-22 05:25:00", "b": 462.4}, {"a": "2024-10-22 05:30:00", "b": 459.6}, {"a": "2024-10-22 05:35:00", "b": 452.0}, {"a": "2024-10-22 05:40:00", "b": 466.0}, {"a": "2024-10-22 05:45:00", "b": 469.75}, {"a": "2024-10-22 05:50:00", "b": 469.75}, {"a": "2024-10-22 05:55:00", "b": 469.2}, {"a": "2024-10-22 06:00:00", "b": 473.4}, {"a": "2024-10-22 06:05:00", "b": 465.6}, {"a": "2024-10-22 06:10:00", "b": 467.6}, {"a": "2024-10-22 06:15:00", "b": 484.0}, {"a": "2024-10-22 06:20:00", "b": 472.4}, {"a": "2024-10-22 06:25:00", "b": 453.4}, {"a": "2024-10-22 06:30:00", "b": 462.8}, {"a": "2024-10-22 06:35:00", "b": 481.0}, {"a": "2024-10-22 06:40:00", "b": 478.0}, {"a": "2024-10-22 06:45:00", "b": 462.75}, {"a": "2024-10-22 06:50:00", "b": 465.4}, {"a": "2024-10-22 06:55:00", "b": 466.0}, {"a": "2024-10-22 07:00:00", "b": 480.5}, {"a": "2024-10-22 07:05:00", "b": 478.75}, {"a": "2024-10-22 07:10:00", "b": 475.2}, {"a": "2024-10-22 07:15:00", "b": 483.0}, {"a": "2024-10-22 07:20:00", "b": 484.75}, {"a": "2024-10-22 07:25:00", "b": 479.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    