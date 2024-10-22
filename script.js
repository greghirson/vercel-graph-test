
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-22 08:00:00", "b": 409.8}, {"a": "2024-10-22 08:05:00", "b": 407.0}, {"a": "2024-10-22 08:10:00", "b": 406.5}, {"a": "2024-10-22 08:15:00", "b": 405.25}, {"a": "2024-10-22 08:20:00", "b": 405.0}, {"a": "2024-10-22 08:25:00", "b": 404.0}, {"a": "2024-10-22 08:30:00", "b": 406.0}, {"a": "2024-10-22 08:35:00", "b": 402.75}, {"a": "2024-10-22 08:40:00", "b": 439.2}, {"a": "2024-10-22 08:45:00", "b": 490.2}, {"a": "2024-10-22 08:50:00", "b": 544.8}, {"a": "2024-10-22 08:55:00", "b": 584.0}, {"a": "2024-10-22 09:00:00", "b": 606.0}, {"a": "2024-10-22 09:05:00", "b": 579.8}, {"a": "2024-10-22 09:10:00", "b": 568.2}, {"a": "2024-10-22 09:15:00", "b": 599.4}, {"a": "2024-10-22 09:20:00", "b": 608.2}, {"a": "2024-10-22 09:25:00", "b": 634.4}, {"a": "2024-10-22 09:30:00", "b": 629.2}, {"a": "2024-10-22 09:35:00", "b": 647.0}, {"a": "2024-10-22 09:40:00", "b": 662.0}, {"a": "2024-10-22 09:45:00", "b": 632.8}, {"a": "2024-10-22 09:50:00", "b": 598.4}, {"a": "2024-10-22 09:55:00", "b": 631.4}, {"a": "2024-10-22 10:00:00", "b": 650.4}, {"a": "2024-10-22 10:05:00", "b": 678.2}, {"a": "2024-10-22 10:10:00", "b": 864.6}, {"a": "2024-10-22 10:15:00", "b": 712.4}, {"a": "2024-10-22 10:20:00", "b": 623.0}, {"a": "2024-10-22 10:25:00", "b": 629.6}, {"a": "2024-10-22 10:30:00", "b": 648.2}, {"a": "2024-10-22 10:35:00", "b": 642.0}, {"a": "2024-10-22 10:40:00", "b": 613.0}, {"a": "2024-10-22 10:45:00", "b": 609.2}, {"a": "2024-10-22 10:50:00", "b": 543.2}, {"a": "2024-10-22 10:55:00", "b": 504.8}, {"a": "2024-10-22 11:00:00", "b": 504.0}, {"a": "2024-10-22 11:05:00", "b": 489.5}, {"a": "2024-10-22 11:10:00", "b": 480.0}, {"a": "2024-10-22 11:15:00", "b": 484.3333333333333}, {"a": "2024-10-22 11:20:00", "b": 484.2}, {"a": "2024-10-22 11:25:00", "b": 476.0}, {"a": "2024-10-22 11:30:00", "b": 479.5}, {"a": "2024-10-22 11:35:00", "b": 473.8}, {"a": "2024-10-22 11:40:00", "b": 477.0}, {"a": "2024-10-22 11:45:00", "b": 463.6}, {"a": "2024-10-22 11:50:00", "b": 472.0}, {"a": "2024-10-22 11:55:00", "b": 471.0}, {"a": "2024-10-22 12:00:00", "b": 473.0}, {"a": "2024-10-22 12:05:00", "b": 469.4}, {"a": "2024-10-22 12:10:00", "b": 470.75}, {"a": "2024-10-22 12:15:00", "b": 458.0}, {"a": "2024-10-22 12:20:00", "b": 455.75}, {"a": "2024-10-22 12:25:00", "b": 459.2}, {"a": "2024-10-22 12:30:00", "b": 459.0}, {"a": "2024-10-22 12:35:00", "b": 454.0}, {"a": "2024-10-22 12:40:00", "b": 455.0}, {"a": "2024-10-22 12:45:00", "b": 456.0}, {"a": "2024-10-22 12:50:00", "b": 456.5}, {"a": "2024-10-22 12:55:00", "b": 457.6666666666667}, {"a": "2024-10-22 13:00:00", "b": 454.4}, {"a": "2024-10-22 13:05:00", "b": 462.2}, {"a": "2024-10-22 13:10:00", "b": 454.2}, {"a": "2024-10-22 13:15:00", "b": 476.0}, {"a": "2024-10-22 13:20:00", "b": 469.4}, {"a": "2024-10-22 13:25:00", "b": 456.6}, {"a": "2024-10-22 13:30:00", "b": 471.2}, {"a": "2024-10-22 13:35:00", "b": 462.5}, {"a": "2024-10-22 13:40:00", "b": 463.0}, {"a": "2024-10-22 13:45:00", "b": 475.4}, {"a": "2024-10-22 13:50:00", "b": 474.6}, {"a": "2024-10-22 13:55:00", "b": 456.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    